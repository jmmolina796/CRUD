import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import { StudentsForm } from '../components';
import { Modal } from '../components';
import { semestersActions, subjectsActions } from '../actions';
import studentsFormValidation from '../components/forms/validations/studentsForm';

import { getStudent } from '../selectors/students';

class StudentsFormContainer extends Component {
  componentDidMount() {
    this.props.requestSemesters();
    this.props.requestSubjects();
  }

  render() {
    const {
      semesters,
      subjects,
      goBack,
      acceptAction,
      title,
      acceptLabel,
      handleSubmit,
      idStudent,
    } = this.props;
    return (
      <Modal header={<h3>{title}</h3>} close={goBack}>
        <StudentsForm
          semesters={semesters}
          subjects={subjects}
          goBack={goBack}
          acceptAction={handleSubmit(data => acceptAction(data, idStudent))}
          acceptLabel={acceptLabel}
        />
      </Modal>
    );
  }
}

StudentsFormContainer.propTypes = {
  semesters: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  subjects: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  goBack: PropTypes.func.isRequired,
  acceptAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  acceptLabel: PropTypes.string.isRequired,
  idStudent: PropTypes.string.isRequired,
};

StudentsFormContainer.defaultProps = {
  idStudent: '0',
};

const mapStateToProps = (state, { idStudent }) => ({
  semesters: state.semesters.list,
  subjects: state.subjects.list,
  initialValues: {
    ...getStudent(state, idStudent)
  }
});

const mapDispatchToProps = dispatch => ({
  requestSemesters: () => dispatch(semestersActions.semestersRequest()),
  requestSubjects: () => dispatch(subjectsActions.subjectsRequest()),
  goBack: url => dispatch(push('/students')),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

const reduxFormConnector = reduxForm({
  form: 'students',
  enableReinitialize: true,
  validate: studentsFormValidation,
});

export default reduxConnector(reduxFormConnector(StudentsFormContainer));
