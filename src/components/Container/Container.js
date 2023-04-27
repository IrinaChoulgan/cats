import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-left: 248px;
  padding-right: 248px;

  @media screen and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
