import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-left: 248px;
  padding-right: 248px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
