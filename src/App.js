import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Layout from "./components/layout/Layout"

import NotFound from "./components/layout/NotFound"
import Login from "./pages/auth/Login"
import HomeIndex from "./pages/home/Index"
import TestIndex from "./pages/test/Index"
import TestForm from "./pages/test/Form"
import TestView from "./pages/test/View"


const routes = [
  { path: '/',
    exact: true,
    component: HomeIndex
  },
  { path: '/contact',
    exact: true,
    component: TestIndex,
  },
  { path: '/contact/view/:id',
    exact: true,
    component: TestView,
  },
  { path: '/contact/store',
    exact: true,
    component: TestForm,
  },
  { path: '/contact/update/:id',
    exact: true,
    component: TestForm,
  }
]

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: (props.cookies.get("permission") == "null") ? false : true
    }
  }

  render() {
    return (
      <Router>
          <Switch>
            {routes.map(({ path, exact, component: ContentComponent }) => (
              <Route
                key={path} path={path} exact={exact}
                render={(props) => (
                  this.state.loggedIn ? (
                    <Layout {...props}>
                      <ContentComponent {...props} />
                    </Layout>

                  ) : (<Redirect to="/login"/>)
                )}
              />
            ))}
            <Route path="/login" component={Login}/>
            <Layout>
              <Route component={NotFound}/>
            </Layout>
          </Switch>
      </Router>
    );
  }
}

export default withCookies(App);
