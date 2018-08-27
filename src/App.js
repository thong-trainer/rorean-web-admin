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
import MasterDataIndex from "./pages/masterdata/Index"
import SettingIndex from "./pages/setting/Index"

const AppConstants = require("./constants/AppConstants");

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
  },
  { path: '/masterdata',
    exact: true,
    component: MasterDataIndex,
  },
  { path: '/setting',
    exact: true,
    component: SettingIndex,
  }
]

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    const setting = props.cookies.get(AppConstants.SETTING_KEY);
    this.state = {
      loggedIn: (setting === undefined) ? false : true,
    }
  }

  componentWillMount() {
    // to sign out when school id doesn't exists in the localStorage
    const schoolId = localStorage.getItem(AppConstants.SCHOOL_ID_KEY);
    if(schoolId === null || schoolId === undefined) {
      this.setState({loggedIn: false});
    }
  }

  componentWillUpdate() {
    // when you clicked on Sign In Button
    if ( (!this.state.loggedIn) && (this.props.cookies.get(AppConstants.SETTING_KEY))) {
      this.setState({ loggedIn: true });
      return;
    }
    // when you clicked on Sign Out Button
    if ( (this.state.loggedIn) && (this.props.cookies.get(AppConstants.SETTING_KEY) === undefined)) {
      this.setState({ loggedIn: false });
      return;
    }
  }

  render() {
    //console.log("App render:", this.state);
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
            <Route key="/login" path="/login" exact render={({props})=>(
              this.state.loggedIn ? <Redirect to='/'/> : <Login {...props}  />
            )}/>
            <Layout>
              <Route exact render={({props})=>(
                this.state.loggedIn ? <NotFound /> : <Redirect to='/'/>
              )}/>
            </Layout>
          </Switch>
      </Router>
    );
  }
}

export default withCookies(App);
