import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

import NavbarContainer from "../containers/NavBarContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginContainer from "../containers/LoginContainer";
import PostViewContainer from "../containers/PostViewContainer";
import PostWriteContainer from "../containers/PostWriteContainer";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <NavbarContainer></NavbarContainer>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/post-write" component={PostWriteContainer} />
          <Route exact path="/post-view/:id" component={PostViewContainer} />
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}
