import React from 'react';
import { Form, ValidatorProvider } from 'a-plus-forms';
import JSONValidator from 'a-plus-forms-json-validator';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  flex-direction: row;

  input {
    color: black;
    border: none;
  }
`;

export default props => {
  const {
    children,
    onChange = console.log,
    onSubmit = console.log,
    onError = console.log,
    ...rest
  } = props;

  return (
    <ValidatorProvider validator={JSONValidator}>
      <StyledForm
        onChange={onChange}
        onSubmit={onSubmit}
        onError={onError}
        {...rest}
      >
        {children}
      </StyledForm>
    </ValidatorProvider>
  );
};
