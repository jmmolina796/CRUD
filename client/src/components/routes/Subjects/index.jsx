import React from 'react';
import { Switch, Route } from 'react-router';
import { push } from 'react-router-redux';

import { New as NewSubjects } from './New';

import CardListSubjectsContainer from '../../../containers/CardListSubjectsContainer';

export const Subjects = () => (
  <div>
    <CardListSubjectsContainer />
    <Switch>
      <Route exact path="/subjects/new" component={NewSubjects} />
    </Switch>
  </div>
);
