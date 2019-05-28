import { Switch, Route, BrowserRouter, HashRouter } from 'inferno-router';
import ViewIndex from './view/index';
import ViewSecond from './view/second';


export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={(props) => <ViewIndex {...props} />} />
      <Route exact path="/second" component={ViewSecond} />
    </Switch>
  </HashRouter>
);
