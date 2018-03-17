import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './wrapper';

const Button = ({ children, action }) => (
  <Wrapper onClick={action}>{children}</Wrapper>
);

Button.propTypes = {
  action: PropTypes.func.isRequired,
};

export default Button;
