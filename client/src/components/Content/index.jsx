import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const Content = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
};
