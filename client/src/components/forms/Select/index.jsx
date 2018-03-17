import React from 'react';

import Wrapper from '../shared/wrapper';
import Label from '../shared/label';
import StyledSelect from './styledSelect';
import Error from '../shared/error';

const Select = ({
  input,
  label,
  id,
  children,
  meta: { touched, error }
}) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <StyledSelect {...input} id={id}>
      {children}
    </StyledSelect>
    {touched && error &&
      <Error>{error}</Error>
    }
  </Wrapper>
);

export default Select;
