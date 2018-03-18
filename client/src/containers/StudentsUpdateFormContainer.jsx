import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StudentsFormContainer from './StudentsFormContainer';

class StudentsUpdateFormContainer extends Component {
  render() {
    return (
      <StudentsFormContainer
        acceptAction={(data) => console.log(data)}
        title="Update a student"
        acceptLabel="Update"
        idStudent={this.props.idStudent}
      />

    );
  }
}

StudentsUpdateFormContainer.propTypes = {
  idStudent: PropTypes.string.isRequired,
};

export default StudentsUpdateFormContainer;
