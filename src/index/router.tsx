import { Router, Switch, Route, BrowserRouter, HashRouter } from 'inferno-router';
// import createHashHistory from 'history/createHashHistory';
import createHashHistory from 'history/createBrowserHistory';
import ViewIndex from './view/index';
import ViewSecond from './view/second';


// export default (
//   <Router>
//     <Route exact path="/" component={ViewIndex} />
//   </Router>
// );

export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={(props) => <ViewIndex {...props} />} />
      <Route exact path="/second" component={ViewSecond} />
    </Switch>
  </HashRouter>
);
