import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.scss';
import App from 'App';
import * as serviceWorker from './serviceWorker';

// Save a reference to the root element for reuse
const rootEl = document.getElementById('root');

// Create a reusable render method that we can call more than once
const renderApp = () => {
    ReactDOM.render(<App />, rootEl);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA

    if(process.env.REGISTER_SERVICE_WORKER === '1') {
        serviceWorker.register();
    }
    else {
        serviceWorker.unregister();
    }
};

if (module.hot) {
    // In development, we wrap the rendering function to catch errors,
    // and if something breaks, log the error and render it to the screen
    const render = () => {
    try {
        renderApp();
    } catch (error) {
        console.error(error);
    }
    };

    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    module.hot.accept(App, () => {
    setTimeout(render);
    });
}

renderApp();