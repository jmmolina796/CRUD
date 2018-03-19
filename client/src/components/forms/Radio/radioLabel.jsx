import styled from 'styled-components';

const RadioLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 80px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &>input {
    position: absolute;
    right: 5px;
  }

`;

export default RadioLabel;
