import React, { Component } from "react";
import Background from "../assets/images/home-bg.jpg";
export default class Header extends Component {
  render() {
    const backgroundImage = {
      backgroundImage: `url(${Background})`,
    };

    return (
      <header className="masthead" style={backgroundImage}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1 ng-bind="header.title"></h1>
                <span className="subheading" ng-bind="header.subtitle"></span>
                <span className="meta" ng-if="header.byline.length > 0" ng-bind="header.byline"></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
