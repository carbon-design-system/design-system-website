import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

//------------------------
// Main wrapper component
//------------------------
import App from './pages/App';

//------------------------
// Overview
//------------------------
import Overview from './pages/Overview';

//------------------------
// Getting started
//------------------------
import GettingStarted from './pages/getting-started/GettingStarted';

//------------------------
// Guidelines
//------------------------
import Guidelines from './pages/guidelines/Guidelines';

//------------------------
// Style
//------------------------
import Style from './pages/style/Style';

//------------------------
// Components
//------------------------
import ComponentPage from './pages/components/ComponentPage';

//------------------------
// Templates
//------------------------
import Templates from './pages/templates/Templates';

//------------------------
// Resources
//------------------------
import Resources from './pages/Resources';

//------------------------
// Component Status
//------------------------
import ComponentStatus from './pages/ComponentStatus';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Overview} />
    <Route path="getting-started">
      <IndexRedirect to="/getting-started/designers" />
      <Route path="/getting-started/:name" component={GettingStarted} />
    </Route>
    <Route path="guidelines">
      <IndexRedirect to="/guidelines/accessibility" />
      <Route path="/guidelines/:name" component={Guidelines} />
      <Route path="/guidelines/:name/:page" component={Guidelines} />
    </Route>
    <Route path="style">
      <IndexRedirect to="/style/colors/swatches" />
      <Route path="/style/:name" component={Style} />
      <Route path="/style/:name/:page" component={Style} />
    </Route>
    <Route path="components">
      <IndexRedirect to="/components/accordion/code" />
      <Route path="/components/:name">
        <IndexRedirect to="/components/:name/code" />
        <Route path="/components/:name/:page" component={ComponentPage} />
      </Route>
    </Route>
    <Route path="templates">
      <IndexRedirect to="/templates/colors" />
      <Route path="/templates/:name" component={Templates} />
    </Route>
    <Route path="resources" component={Resources} />
    <Route path="component-status" component={ComponentStatus} />
  </Route>
);
