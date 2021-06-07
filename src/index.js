import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configreStore from './store';

import App from './components/App';

import './index.css';

const store = configreStore({});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <App />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
