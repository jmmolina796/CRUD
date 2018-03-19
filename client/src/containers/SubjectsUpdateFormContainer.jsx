import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SubjectsFormContainer from './SubjectsFormContainer';
import { subjectsActions as actions } from '../actions';

class SubjectsUpdateFormContainer extends Component {
  render() {
    return (
      <SubjectsFormContainer
        acceptAction={(subject, id) => this.props.requestUpdateSubject(subject, id)}
        title="Update a subject"
        acceptLabel="Update"
        idSubject={this.props.idSubject}
      />
    );
  }
}

SubjectsUpdateFormContainer.propTypes = {
  requestUpdateSubject: PropTypes.func.isRequired,
  idSubject: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestUpdateSubject: (subject, id) => dispatch(actions.updateSubjectRequest(subject, id)),
});

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(SubjectsUpdateFormContainer);
