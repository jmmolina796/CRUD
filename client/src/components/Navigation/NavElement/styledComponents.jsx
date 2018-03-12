import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 150px;

  &:hover {
    color: #EEE;
    border-color: #EEE;
  }

  ${({ active }) => active && css`
    border-radius: 5px;
    border: solid 1px #FFF;
  `}

`;

Button.propTypes = {
  active: PropTypes.bool.isRequired,
};
