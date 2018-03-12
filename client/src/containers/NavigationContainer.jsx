import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Navigation } from '../components';

class NavigationContainer extends Component {
  render() {
    const elements = [
      {
        id: '1',
        name: 'Home',
        'url': '/',
        action: this.props.goTo,
      },
      {
        id: '2',
        name: 'Subjects',
        'url': '/subjects',
        action: this.props.goTo,
      },
      {
        id: '3',
        name: 'Students',
        'url': '/students',
        action: this.props.goTo,
      },
    ]
    return (
      <Navigation path={this.props.path} elements={elements} />
    );
  }
}

const mapStateToProps = ({ router: { location } }) => ({
  path: `/${location.pathname.split('/')[1]}`,
});

const mapDispatchToProps = dispatch => ({
  goTo: url => dispatch(push(url)),
});

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(NavigationContainer);
