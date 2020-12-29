import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarContainer from "../containers/NavBarContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginContainer from "../pages/Login";
import HomeContainer from "../pages/Home";
import PostViewContainer from "../containers/PostViewContainer";
import PostWriteContainer from "../containers/PostWriteContainer";

export const MainRouter = () => {
  return (
    <Router>
      <NavbarContainer></NavbarContainer>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/post-write" component={PostWriteContainer} />
        <Route exact path="/post-view/:id" component={PostViewContainer} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
};
