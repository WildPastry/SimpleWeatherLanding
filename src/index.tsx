import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import rootReducers from './store';

// Create data store
const store = configureStore(rootReducers);

// Index
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Data test
reportWebVitals();
