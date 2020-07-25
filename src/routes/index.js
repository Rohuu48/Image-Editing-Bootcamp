import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import ScoreTasks from '../screens/ScoreTasks';
const MainRoute = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/scoretasks" exact component={ScoreTasks} />
      </Switch>
    </Suspense>
  );
};

export default MainRoute;
