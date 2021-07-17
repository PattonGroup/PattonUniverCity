import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Auth0Provider
    domain="pattonunivercity.us.auth0.com"
    clientId="Aa7C3wjXeRwoi9f3jOfFyJfN8pR0dg4c"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
