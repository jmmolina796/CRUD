import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { ModalMessage } from '../components';
import { findStudent } from '../selectors/students';

class StudentsDeleteFormContainer extends Component {
  render() {
    const { goBack, idStudent, name } = this.props;
    return (
      <ModalMessage
        title="Delete a student"
        goBack={goBack}
        acceptAction={() => console.log(idStudent)}
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
};

const mapStateToProps = (state, { idStudent }) => ({
  name: findStudent(state, idStudent),
});

const mapDispatchToProps = dispatch => ({
  goBack: url => dispatch(push('/students')),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(StudentsDeleteFormContainer);
