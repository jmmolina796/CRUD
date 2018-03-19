import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { ModalMessage } from '../components';
import { findSubject } from '../selectors/subjects';

class SubjectsDeleteFormContainer extends Component {
  render() {
    const { goBack, idSubject, name } = this.props;
    return (
      <ModalMessage
        title="Delete a subject"
        goBack={goBack}
        acceptAction={() => console.log(idSubject)}
        acceptLabel="Delete"
        message={`Are you sure you want to delete ${name}?`}
      />
    );
  }
}

SubjectsDeleteFormContainer.propTypes = {
  goBack: PropTypes.func.isRequired,
  idSubject: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { idSubject }) => ({
  name: findSubject(state, idSubject),
});

const mapDispatchToProps = dispatch => ({
  goBack: url => dispatch(push('/subjects')),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(SubjectsDeleteFormContainer);
