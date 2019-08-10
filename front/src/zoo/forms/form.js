import React from 'react';
import { Form, ValidatorProvider } from 'a-plus-forms';
import JSONValidator from 'a-plus-forms-json-validator';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  flex-direction: row;

  input {
    border: none;
    color: black;
  }
`;

const FormWrapper = props => {
  const { children, ...rest } = props;

  return (
    <ValidatorProvider validator={JSONValidator}>
      <StyledForm {...rest}>{children}</StyledForm>
    </ValidatorProvider>
  );
};

FormWrapper.propTypes = {
  children: React.Element,
  onChange: () => {},
  onError: () => {},
  onSubmit: () => {},
};

FormWrapper.defaultProps = {
  children: '',
  onChange: console.log,
  onSubmit: console.log,
  onError: console.log,
};

export default FormWrapper;
