import React from 'react';
import PropTypes from 'prop-types';

import SubjectsUpdateFormContainer from '../../../../containers/SubjectsUpdateFormContainer';

export const Update = ({ match: { params: { id } } }) => (
  <SubjectsUpdateFormContainer idSubject={id} />
);

Update.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }).isRequired,
};
