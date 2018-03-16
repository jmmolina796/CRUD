import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

export const EmptyCard = ({ newElement }) => (
  <Wrapper onClick={newElement} />
);

EmptyCard.propTypes = {
  newElement: PropTypes.func.isRequired,
};
