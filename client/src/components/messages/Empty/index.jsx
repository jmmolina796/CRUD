import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

const Empty = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Empty.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Empty;
