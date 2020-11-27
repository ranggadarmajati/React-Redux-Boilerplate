import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../Helper';
import Welcome from './Welcome';


const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </Router>
    </div>
  );
}

function mapState(state) {
  return {};
}

const actionCreators = {

};

export default connect(mapState, actionCreators)(App);

