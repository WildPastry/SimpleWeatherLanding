import App from './App';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import rootReducers from './store';

// Create data store
const store = createStore(rootReducers);

// Index
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
