import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReadComponent from '../../components/randing/Read';
import Article from '../../components/randing/Read/article';

const Read = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path='/read' component={ReadComponent} />
        <Route exact path={`${match.url}/:id`} component={Article} />
      </Switch>
    </div>
  );
};

export default Read;
