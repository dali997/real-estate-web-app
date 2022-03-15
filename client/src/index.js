import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
 import {ProductStore} from '../src/JS/store/ProductStore'
ReactDOM.render(
  <BrowserRouter>
  <Provider store={ProductStore}>
    <App/>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

