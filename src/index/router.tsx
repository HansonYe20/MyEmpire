import { Switch, Route, BrowserRouter, HashRouter } from 'inferno-router';
import ViewIndex from './view/index';
import ViewSecond from './view/second';
import ViewTestContext from './view/testContext';
import ViewTestRef from './view/testRef';
import ViewTestRenderProp from './view/testRenderProp';
import ViewTestInterceptBack from './view/testInterceptBack';
import ViewTestCanvas from './view/testCanvas';
import ViewTestAnnimation from './view/testAnnimation';
import ViewTestAnniBall from './view/testAnniBall';
import ViewTestQuxian from './view/testAnniQuxian';


export default (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={(props) => <ViewIndex {...props} />} />
      <Route exact path="/second" component={ViewSecond} />
      <Route exact path="/testContext" component={ViewTestContext} />
      <Route exact path="/testRef" component={ViewTestRef} />
      <Route exact path="/testRenderProp" component={ViewTestRenderProp} />
      <Route exact path="/testInterceptBack" component={ViewTestInterceptBack} />
      <Route exact path="/testCanvas" component={ViewTestCanvas} />
      <Route exact path="/testAnnimation" component={ViewTestAnnimation} />
      <Route exact path="/testAnniBall" component={ViewTestAnniBall} />
      <Route exact path="/testAnniQuxian" component={ViewTestQuxian} />
    </Switch>
  </HashRouter>
);
