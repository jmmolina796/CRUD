import React from 'react';
import PropTypes from 'prop-types';

import SubjectsDeleteFormContainer from '../../../../containers/SubjectsDeleteFormContainer';

export const Delete = ({ match: { params: { id } } }) => (
  <SubjectsDeleteFormContainer idSubject={id} />
);

Delete.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }).isRequired,
};
