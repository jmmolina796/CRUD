import React from 'react';
import { Switch, Route } from 'react-router';

import { Home } from '../Home';
import { Subjects } from '../Subjects';
import { New as NewSubjects } from '../Subjects/New';
import { NotFound } from '../NotFound';

export const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/subjects" component={Subjects} />
    <Route exact path="/subjects/new" component={NewSubjects} />
    <Route component={NotFound} />
  </Switch>
);
