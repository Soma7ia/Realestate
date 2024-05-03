import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Route, Switch, Router } from "react-router-dom";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import history from "./history";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : (f) => f)(
      createStore
    )
  )
);

import "./style/main.scss";
import SignUp from "./components/auth/signUp";
import SignIn from "./components/auth/signIn";
import Layout from "./components/layout";
import requireAuth from "./components/requireAuth";
import Dashboard from "./components/dashboard";
import NewsletterNew from "./components/newsletter/newsletterNew";
import EditNewsletter from "./components/newsletter/newsletterEdit.js";
import NewsletterDetails from "./components/newsletter/newsletterDetails";
import RequestsNew from "./components/requests/requestsNew";
import forgotPassword from "./components/auth/forgotPassword";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot" component={forgotPassword} />

            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route
              path="/newsletter/new"
              component={requireAuth(NewsletterNew)}
            />
            <Route
              path="/newsletter/edit/:id"
              component={requireAuth(EditNewsletter)}
            />
            <Route
              path="/newsletter/details/:id"
              component={requireAuth(NewsletterDetails)}
            />

            <Route path="/requests/new" component={requireAuth(RequestsNew)} />
          </Layout>
        </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
