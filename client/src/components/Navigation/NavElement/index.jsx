import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styledComponents';

export const NavElement = ({ children, url, action, path }) => (
  <Button
    onClick={action}
    active={url === path}
  >
    {children}
  </Button>
);

NavElement.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};
