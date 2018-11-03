import React from 'react';
import styled from 'styled-components';

// https://github.com/google/material-design-icons/blob/master/iconfont/codepoints
// for all valid icon names

const I = styled.i.attrs({
  className: 'material-icons',
})`
  color: ${({ color, theme }) =>
    color && theme ? theme.color[color] || color : 'inherit'};
  background-color: ${({ background, theme }) =>
    background && theme ? theme.color[background] || background : 'inherit'};
  font-size: ${({ lg, sm }) => (sm ? '1rem' : lg ? '2rem' : 'inherit')};
  font-weight: inherit;
`;

const Icon = ({ type, ...rest }) => <I {...rest}>{type || 'bug_report'}</I>;

export default Icon;
