import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { studentsActions as actions } from '../actions';

import { CardList } from '../components';

class CardListStudentsContainer extends Component {
  componentDidMount() {
    this.props.requestStudents();
  }

  render() {
    return (
      <CardList
        isFetching={this.props.isFetching}
        didError={this.props.didError}
        list={this.props.list}
        newElement={() => this.props.goTo('/students/new')}
        modifyElement={id => this.props.goTo(`/students/update/${id}`)}
        deleteElement={id => this.props.goTo(`/students/delete/${id}`)}
      />
    );
  }
}

const mapStateToProps = ({ students }) => ({
  isFetching: students.isFetching,
  didError: students.didError,
  list: students.list,
});

const mapDispatchToProps = dispatch => ({
  requestStudents: () => dispatch(actions.studentsRequest()),
  goTo: url => dispatch(push(url)),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(CardListStudentsContainer);
