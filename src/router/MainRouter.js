import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginContainer from "../pages/Login";
import Home from "../pages/Home";
import PostView from "../pages/PostView";
import PostWrite from "../pages/PostWrite";

export const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/post-write" component={PostWrite} />
        <Route exact path="/post-view/:id" component={PostView} />
      </Switch>
      <Footer />
    </Router>
  );
};
