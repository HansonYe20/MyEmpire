import { Switch, Route, BrowserRouter, HashRouter } from 'inferno-router';
import ViewIndex from './view/index';
import ViewSecond from './view/second';
import ViewTestContext from './view/testContext';
import ViewTestRef from './view/testRef';
import ViewTestRenderProp from './view/testRenderProp';

export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={(props) => <ViewIndex {...props} />} />
      <Route exact path="/second" component={ViewSecond} />
      <Route exact path="/testContext" component={ViewTestContext} />
      <Route exact path="/testRef" component={ViewTestRef} />
      <Route exact path="/testRenderProp" component={ViewTestRenderProp} />
    </Switch>
  </HashRouter>
);
