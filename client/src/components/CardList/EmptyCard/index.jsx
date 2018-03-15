import React from 'react';

import { Wrapper } from './styledComponents';

const EmptyCard = ({ newUser }) => (
  <Wrapper onClick={newUser} />
);

export default EmptyCard;
