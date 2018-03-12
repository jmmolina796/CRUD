import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const Button = ({ children, primary, secondary, action }) => (
  <Wrapper
    primary={primary}
    secondary={secondary}
    onClick={action}
  >
    {children}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  secondary: false,
};
