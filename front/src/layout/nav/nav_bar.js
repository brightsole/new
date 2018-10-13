import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: start;
  background-color: ${() => chroma('palevioletred').hex()};
  display: flex;
  flex-direction: row;
  height: 2rem;
  justify-content: space-between;
  padding: 0 0.25rem;
  width: 100%;
`;

const Nav = () => (
  <Wrapper>
    <h1>new-front</h1>
  </Wrapper>
);

export default Nav;
