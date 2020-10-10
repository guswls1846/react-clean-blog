import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PostWrite from "./PostWrite";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostView from "./PostView";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post-write" component={PostWrite} />
          <Route exact path="/post-view/:id" component={PostView} />
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}
