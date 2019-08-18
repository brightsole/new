import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: start;
  background-color: ${p => p.theme.color.primary};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  padding: ${p => p.theme.spacing.small};
  width: 100%;

  h1 {
    text-transform: uppercase;
  }
`;

const NavBar = () => (
  <Wrapper>
    <h1>new-front</h1>
  </Wrapper>
);

export default NavBar;
