import React from "react";
import { Helmet } from "react-helmet";

import Routes from "./components/Routes";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <title>Clean React Blog</title>

          <base href="/" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="./logo.svg" />

          {/* <!-- Custom styles for this template --> */}

          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Helmet>

        <Routes></Routes>
      </div>
    );
  }
}
