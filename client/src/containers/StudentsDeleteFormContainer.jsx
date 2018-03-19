import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { ModalMessage } from '../components';
import { findStudent } from '../selectors/students';
import { studentsActions as actions } from '../actions';

class StudentsDeleteFormContainer extends Component {
  render() {
    const { goBack, name, requestDeleteStudent } = this.props;
    return (
      <ModalMessage
        title="Delete a student"
        goBack={goBack}
        acceptAction={requestDeleteStudent}
        acceptLabel="Delete"
        message={`Are you sure you want to delete ${name}?`}
      />
    );
  }
}

StudentsDeleteFormContainer.propTypes = {
  goBack: PropTypes.func.isRequired,
  idStudent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requestDeleteStudent: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { idStudent }) => ({
  name: findStudent(state, idStudent),
});

const mapDispatchToProps = (dispatch, { idStudent }) => ({
  goBack: url => dispatch(push('/students')),
  requestDeleteStudent: () => dispatch(actions.deleteStudentRequest(idStudent)),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(StudentsDeleteFormContainer);
