import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
          </Switch>
          <Switch>
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
