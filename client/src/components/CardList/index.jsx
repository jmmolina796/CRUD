import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Wrapper } from './styledComponents';
import Card from './Card';
import EmptyCard from './EmptyCard';

export const CardList = ({ list, newUser }) => (
  <Wrapper>
    {_.map(list, (data => (
        <Card key={data.id} data={data} />
      )))
    }
    <EmptyCard newUser={newUser} />
  </Wrapper>
);

CardList.propTypes = {
  list: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
