import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const Image = ({ height, width, src, alt, title }) => (
  <Wrapper
      height={height}
      width={width}
      src={src}
      alt={alt}
      title={title}
  />
);

Image.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  title: '',
};
