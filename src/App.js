import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BasicTemplate from './templates/BasicTemplate';
import Home from './pages/home';
import Read from './pages/read';
import Watch from './pages/watch';
import Listen from './pages/listen';
import Recommend from './pages/recommend';
import Topics from './pages/topics';
import Saved from './pages/saved';

function App() {
  return (
    <>
      <Switch>
        <BasicTemplate>
          <Route exact path='/' component={Home} />
          <Route exact path='/read' component={Read} />
          <Route exact path='/watch' component={Watch} />
          <Route exact path='/listen' component={Listen} />
          <Route exact path='/recommend' component={Recommend} />
          <Route exact path='/topics' component={Topics} />
          <Route exact path='/saved' component={Saved} />
        </BasicTemplate>
      </Switch>
    </>
  );
}

export default App;
