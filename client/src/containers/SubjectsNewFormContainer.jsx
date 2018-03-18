import React, { Component } from 'react';

import SubjectsFormContainer from './SubjectsFormContainer';

class SubjectsNewFormContainer extends Component {
  render() {
    return (
      <SubjectsFormContainer
        acceptAction={(data) => console.log(data)}
        title="Insert a new subject"
        acceptLabel="Add" />
    );
  }
}

export default SubjectsNewFormContainer;
