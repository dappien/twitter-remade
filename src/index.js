import React from 'react';
import './_base.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  store  from "./redux/store";
import { render } from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
