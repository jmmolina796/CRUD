import React from 'react';
import PropTypes from 'prop-types';

import StudentsUpdateFormContainer from '../../../../containers/StudentsUpdateFormContainer';

export const Update = ({ match: { params: { id } } }) => (
  <StudentsUpdateFormContainer idStudent={id} />
);

Update.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }).isRequired,
};
