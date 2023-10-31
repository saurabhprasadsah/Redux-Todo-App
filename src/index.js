import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/class/App';

//Use for functional components...
// import App from './components/functional/App';
import { Provider } from 'react-redux';
import store from './store/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




