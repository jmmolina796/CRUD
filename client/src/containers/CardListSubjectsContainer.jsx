import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { subjectsActions as actions } from '../actions';

import { CardList } from '../components';

class CardListSubjectsContainer extends Component {
  componentDidMount() {
    this.props.requestSubjects();
  }

  render() {
    return (
      <CardList
        isFetching={this.props.isFetching}
        didError={this.props.didError}
        list={this.props.list}
        newElement={() => this.props.goTo('/subjects/new')}
        modifyElement={id => this.props.goTo(`/subjects/update/${id}`)}
        deleteElement={id => this.props.goTo(`/subjects/delete/${id}`)}
      />
    );
  }
}

const mapStateToProps = ({ subjects }) => ({
  isFetching: subjects.isFetching,
  didError: subjects.didError,
  list: subjects.list,
});

const mapDispatchToProps = dispatch => ({
  requestSubjects: () => dispatch(actions.subjectsRequest()),
  goTo: url => dispatch(push(url)),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(CardListSubjectsContainer);
