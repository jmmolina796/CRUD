import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import { SubjectsForm } from '../components';
import { Modal } from '../components';
import { semestersActions, categoriesActions } from '../actions';
import professionalsFormValidation from '../components/forms/validations/subjectsForm';

import { getSubject } from '../selectors/subjects';

class SubjectsFormContainer extends Component {
  componentDidMount() {
    this.props.requestSemesters();
    this.props.requestCategories();
  }

  render() {
    const {
      semesters,
      categories,
      goBack,
      acceptAction,
      title,
      acceptLabel,
      handleSubmit,
    } = this.props;
    return (
      <Modal header={<h3>{title}</h3>} close={goBack}>
        <SubjectsForm
          semesters={semesters}
          categories={categories}
          goBack={goBack}
          acceptAction={handleSubmit(data => acceptAction(data))}
          acceptLabel={acceptLabel}
        />
      </Modal>
    );
  }
}

SubjectsFormContainer.propTypes = {
  semesters: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  categories: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  goBack: PropTypes.func.isRequired,
  acceptAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  acceptLabel: PropTypes.string.isRequired,
  idSubject: PropTypes.string.isRequired,
};

SubjectsFormContainer.defaultProps = {
  idSubject: '0',
};

const mapStateToProps = (state, { idSubject }) => ({
  semesters: state.semesters.list,
  categories: state.categories.list,
  initialValues: {
    ...getSubject(state, idSubject)
  }
});

const mapDispatchToProps = dispatch => ({
  requestSemesters: () => dispatch(semestersActions.semestersRequest()),
  requestCategories: () => dispatch(categoriesActions.categoriesRequest()),
  goBack: url => dispatch(push('/subjects')),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

const reduxFormConnector = reduxForm({
  form: 'subjects',
  enableReinitialize: true,
  validate: professionalsFormValidation,
});

export default reduxConnector(reduxFormConnector(SubjectsFormContainer));
