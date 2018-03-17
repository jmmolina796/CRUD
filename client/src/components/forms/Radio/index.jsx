import React from 'react';

import Wrapper from '../shared/wrapper';
import Label from '../shared/label';
import RadioLabel from './radioLabel';
import Error from '../shared/error';

const Radio = ({
  input,
  label,
  elements,
  meta: { touched, error }
}) => (
  <Wrapper>
    <Label>{label}</Label>
    {elements.map(({ name, value }) => (
      <RadioLabel key={value}>
        { name }
        <input {...input} type="radio" value={value} checked={value === input.value} />
      </RadioLabel>
    ))}
    {touched && error &&
      <Error>{error}</Error>
    }
  </Wrapper>
);

export default Radio;
