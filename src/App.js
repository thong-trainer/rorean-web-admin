import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Layout from "./components/layout/Layout"

import NotFound from "./components/layout/NotFound"
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
  render() {
    return (
      <Router>
          <Switch>
            {routes.map(({ path, exact, component: ContentComponent }) => (
              <Route
                key={path} path={path} exact={exact}
                render={(props) => (
                  <Layout {...props}>
                    <ContentComponent {...props} />
                  </Layout>
                )}
              />
            ))}
            <Layout>
              <Route component={NotFound}/>
            </Layout>
          </Switch>
      </Router>

    );
  }
}

export default App;
