import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  padding: 4em;
  height: 80rem;
  width: 20rem;
`;

const Title = styled.h1`
  flex: 1;
`;

const StyledTag = () => {
  return (
    <Wrapper>
      <Title />
    </Wrapper>
  );
};

export default StyledTag;
