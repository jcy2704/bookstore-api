import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import Routes from './components/Routes';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk));

const wrappedApp = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(
  wrappedApp,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
