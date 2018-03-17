import React from 'react';

import Wrapper from '../shared/wrapper';
import Label from '../shared/label';
import StyledInput from './styledInput';
import Error from '../shared/error';

const Input = ({
  input,
  type,
  label,
  id,
  meta: { touched, error }
}) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput {...input} type={type} id={id} />
    {touched && error &&
      <Error>{error}</Error>
    }
  </Wrapper>
);

export default Input;
