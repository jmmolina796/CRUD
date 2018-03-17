import React from 'react';
import { Switch, Route } from 'react-router';

import { New } from './New';
import { Update } from './Update';
import { Delete } from './Delete';

import CardListSubjectsContainer from '../../../containers/CardListSubjectsContainer';

export const Subjects = () => (
  <div>
    <CardListSubjectsContainer />
    <Switch>
      <Route exact path="/subjects/new" component={New} />
      <Route exact path="/subjects/update/:id" component={Update} />
      <Route exact path="/subjects/delete/:id" component={Delete} />
    </Switch>
  </div>
);
