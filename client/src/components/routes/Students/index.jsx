import React from 'react';
import { Switch, Route } from 'react-router';

import CardListStudentsContainer from '../../../containers/CardListStudentsContainer';
import { New } from './New';
import { Update } from './Update';
import { Delete } from './Delete';

export const Students = () => (
  <div>
    <CardListStudentsContainer />
    <Switch>
      <Route exact path="/students/new" component={New} />
      <Route exact path="/students/update/:id" component={Update} />
      <Route exact path="/students/delete/:id" component={Delete} />
    </Switch>
  </div>
);
