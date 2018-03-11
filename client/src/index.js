import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';
import baseStyles from './styles';
import store from './store';
import { history } from './history';
import { App } from './components';

const element = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const render = () => {
  baseStyles();
  ReactDOM.render(element, document.getElementById('root'));
};

render();
registerServiceWorker();
