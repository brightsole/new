import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'src/zoo';

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
  children: PropTypes.node,
};

// render an unset(bug) icon if you're using an empty article
Article.defaultProps = {
  children: <Icon />,
};

export default Article;
