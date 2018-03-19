import React, { Component } from 'react';

import StudentsFormContainer from './StudentsFormContainer';

class StudentsNewFormContainer extends Component {
  render() {
    return (
      <StudentsFormContainer
        acceptAction={(data) => console.log(data)}
        title="Insert a new student"
        acceptLabel="Add" />
    );
  }
}

export default StudentsNewFormContainer;
