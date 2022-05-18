import React from 'react';
import styled from 'styled-components';

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

const LeftButton = styled.button`
  width: 7rem;
  height: 3rem;
  margin-left: 2rem;
  margin-top: -1rem;
  background-color: ${(props) =>
    props.bold || props.bordered ? 'white' : '#67b2f5'};
  font-weight: ${(props) => (props.bold ? '900' : '600')};
  color: #0e3961;
  border: ${(props) =>
    props.bordered ? '2px solid #67b2f5' : '0.5px solid #67b2f5'};
`;
const RightButton = styled.button`
  width: 7rem;
  height: 3rem;
  border: 0.5px solid #464e54;
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
        <Border>
          <Left>
            <LeftButton bold={props.bold} bordered={props.bordered}>
              Styled Tag
            </LeftButton>
          </Left>
          <Right>
            <RightButton>Show Code</RightButton>
          </Right>
        </Border>
      </Wrapper>
    </>
  );
};

export default StyledTag;
