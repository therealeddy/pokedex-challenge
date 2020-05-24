import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Pokemon } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </Switch>
  );
}
