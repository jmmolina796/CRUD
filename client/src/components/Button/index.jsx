import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const Button = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
