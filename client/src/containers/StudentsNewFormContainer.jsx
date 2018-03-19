import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StudentsFormContainer from './StudentsFormContainer';
import { studentsActions as actions } from '../actions';

class StudentsNewFormContainer extends Component {
  render() {
    return (
      <StudentsFormContainer
        acceptAction={student => this.props.requestInsertStudent(student)}
        title="Insert a new student"
        acceptLabel="Add" />
    );
  }
}

StudentsNewFormContainer.propTypes = {
  requestInsertStudent: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestInsertStudent: student => dispatch(actions.insertStudentRequest(student)),
});

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(StudentsNewFormContainer);
