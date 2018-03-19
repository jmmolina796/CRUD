import React from 'react';
import PropTypes from 'prop-types';

import StudentsDeleteFormContainer from '../../../../containers/StudentsDeleteFormContainer';

export const Delete = ({ match: { params: { id } } }) => (
  <StudentsDeleteFormContainer idStudent={id} />
);

Delete.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }).isRequired,
};
