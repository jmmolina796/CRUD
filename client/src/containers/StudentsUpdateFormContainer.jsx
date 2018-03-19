import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StudentsFormContainer from './StudentsFormContainer';
import { studentsActions as actions } from '../actions';

class StudentsUpdateFormContainer extends Component {
  render() {
    return (
      <StudentsFormContainer
        acceptAction={(student, id) => this.props.requestUpdateStudent(student, id)}
        title="Update a student"
        acceptLabel="Update"
        idStudent={this.props.idStudent}
      />

    );
  }
}

StudentsUpdateFormContainer.propTypes = {
  requestUpdateStudent: PropTypes.func.isRequired,
  idStudent: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestUpdateStudent: (student, id) => dispatch(actions.updateStudentRequest(student, id)),
});

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(StudentsUpdateFormContainer);
