import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BasicTemplate from './templates/BasicTemplate';
import Home from './pages/home';
import Read from './pages/read';
import Watch from './pages/watch';
import Listen from './pages/listen';

function App() {
  return (
    <>
      <Switch>
        <BasicTemplate>
          <Route exact path='/' component={Home} />
          <Route exact path='/read' component={Read} />
          <Route exact path='/watch' component={Watch} />
          <Route exact path='/listen' component={Listen} />
        </BasicTemplate>
      </Switch>
    </>
  );
}

export default App;
