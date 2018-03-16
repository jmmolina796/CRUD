import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subjectsActions as actions } from '../actions';

import { CardList } from '../components';

class CardListSubjectsContainer extends Component {
  componentDidMount() {
    this.props.requestSubjects();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardList
        isFetching={this.props.isFetching}
        didError={this.props.didError}
        list={this.props.list}
        newElement={() => alert('newElement')}
        modifyElement={() => alert('modifyElement')}
        deleteElement={() => alert('deleteElement')}
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
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(CardListSubjectsContainer);
