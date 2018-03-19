import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Button } from './styledComponents';

export const Tools = ({ modifyElement, deleteElement }) => (
  <Wrapper>
    <Button onClick={modifyElement}>✏</Button>
    <Button onClick={deleteElement}>𝗑</Button>
  </Wrapper>
);

Tools.propTypes = {
  modifyElement: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired,
};
