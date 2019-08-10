import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../icon';

const Wrapper = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

const Article = ({ children }) => <Wrapper>{children}</Wrapper>;

Article.propTypes = {
  children: propTypes.node,
};

// render an unset(bug) icon if you're using an empty article
Article.defaultProps = {
  children: <Icon />,
};

export default Article;
