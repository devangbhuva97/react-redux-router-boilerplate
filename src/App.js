import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import ScrollToTop from 'utils/scroll-to-top';
import Routes from 'config/routes';

import MainAppLayout from 'layouts/main-app.layout';

import LandingPage from 'pages/containers/landingpage';

export default class App extends Component {
  render() {
    return (
      <Router basename={Routes.BaseURL}>
        <ScrollToTop>
          <Switch>
            {/* Landing Page */}
            <MainAppLayout
              exact
              path={Routes.LandingPage}
              component={LandingPage}
            />
            <Redirect to={Routes.NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}