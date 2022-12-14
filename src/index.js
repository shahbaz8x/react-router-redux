import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'
//const store = createStore(rootReducer)
//console.log("store data", store)
//

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
console.log("store data", store);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
