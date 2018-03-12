import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const FlexSection = ({ height, width, children, alignItems, justifyContent }) => (
  <Wrapper
    height={height}
    width={width}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </Wrapper>
);

FlexSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
};

FlexSection.defaultProps = {
  alignItems: 'center',
  justifyContent: 'space-evenly',
};
