import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SubjectsFormContainer from './SubjectsFormContainer';
import { subjectsActions as actions } from '../actions';

class SubjectsNewFormContainer extends Component {
  render() {
    return (
      <SubjectsFormContainer
        acceptAction={subject => this.props.requestInsertSubject(subject)}
        title="Insert a new subject"
        acceptLabel="Add" />
    );
  }
}

SubjectsNewFormContainer.propTypes = {
  requestInsertSubject: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestInsertSubject: subject => dispatch(actions.insertSubjectRequest(subject)),
});

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(SubjectsNewFormContainer);
