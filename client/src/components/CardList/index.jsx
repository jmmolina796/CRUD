import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Wrapper } from './styledComponents';
import { Card } from './Card';
import { EmptyCard } from './EmptyCard';
import { CircleSpinner } from '../CircleSpinner';
import { Error } from '../messages/Error';

export const CardList = ({
  list,
  newElement,
  modifyElement,
  deleteElement,
  isFetching,
  didError,
}) => (
  isFetching ? (
    <Wrapper>
      <CircleSpinner />
    </Wrapper>
  ) : didError ? (
    <Wrapper>
      <Error>An Error has occured</Error>
    </Wrapper>
  ) : (
      <Wrapper>
        {_.map(list, (data => (
          <Card
            key={data.id}
            data={data}
            modifyElement={() => { modifyElement(data.id) }}
            deleteElement={() => { deleteElement(data.id) }}
          />
        )))
      }
      <EmptyCard newElement={newElement} />
    </Wrapper>
  )
);

CardList.propTypes = {
  list: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  newElement: PropTypes.func.isRequired,
  modifyElement: PropTypes.func.isRequired,
  deleteElement: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  didError: PropTypes.bool.isRequired,
};
