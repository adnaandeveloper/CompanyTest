import React from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';

const Wrapper = styled.section`
  height: 15rem;
  margin: 0rem 3rem;
  align-content: center;
`;
const Border = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid black;
  height: 10rem;
`;

const Title = styled.h1`
  margin-bottom: -21px;
  font-weight: ${(props) => (props.bold ? '800' : '200')};
`;
const Button = styled.button`
  width: 7rem;
  height: 3rem;
  margin-left: 2rem;
  margin-top: -1rem;
  background-color: ${(props) => (props.primary ? '#6495ED' : '')};
  color: ${(props) => (props.color ? props.color : '')};
`;

const Left = styled.div`
  display: flex;
  direction: column;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  direction: column;
  align-items: flex-end;
`;

const StyledTag = (props) => {
  return (
    <>
      <Wrapper>
        <Title bold={props}> {props.title ? props.title : ' Dafault '}</Title>
        <Divider />
        <Border>
          <Left>
            <Button primary color="#FFFFFF">
              Styled Tag
            </Button>
          </Left>
          <Right>
            <Button>Show Code</Button>
          </Right>
        </Border>
      </Wrapper>
    </>
  );
};

export default StyledTag;
