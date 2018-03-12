import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const NavButton = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

NavButton.propTypes = {
  children: PropTypes.string.isRequired,
};
