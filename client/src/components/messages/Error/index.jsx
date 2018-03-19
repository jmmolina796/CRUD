import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const Error = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
