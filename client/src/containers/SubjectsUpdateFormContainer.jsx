import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SubjectsFormContainer from './SubjectsFormContainer';

class SubjectsUpdateFormContainer extends Component {
  render() {
    return (
      <SubjectsFormContainer
        acceptAction={(data) => console.log(data)}
        title="Update a subject"
        acceptLabel="Update"
        idSubject={this.props.idSubject}
      />

    );
  }
}

SubjectsUpdateFormContainer.propTypes = {
  idSubject: PropTypes.string.isRequired,
};

export default SubjectsUpdateFormContainer;
