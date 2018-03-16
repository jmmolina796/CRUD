import React from 'react';
import { Switch, Route } from 'react-router';

import { Home } from '../Home';
import { Subjects } from '../Subjects';
import { NotFound } from '../NotFound';

export const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/subjects" component={Subjects} />
    <Route component={NotFound} />
  </Switch>
);
