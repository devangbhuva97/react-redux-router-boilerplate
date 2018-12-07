import React from 'react';
import { Route, withRouter } from 'react-router-dom';

const MainAppLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="main-app">
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default withRouter(MainAppLayout);
