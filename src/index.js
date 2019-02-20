import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";

import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import * as serviceWorker from "./serviceWorker";
import { Layout } from "./layout/Layout";
import { App } from "./components/App";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router";
import thunk from "redux-thunk";

const browserHistory = createBrowserHistory();

const counterReducer = (state = 0, action = {}) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const combinedReducer = combineReducers({
  counter: counterReducer,
  router: connectRouter(browserHistory)
});

const logMiddleware = ({ dispatch, getState }) => next => action => {
  console.log("state:", getState());
  console.log("action:", action);

  return next(action);
};

const middlewares = [thunk, logMiddleware, routerMiddleware(browserHistory)];

const store = createStore(combinedReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <Layout>
        <App />
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
