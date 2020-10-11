import React, { Component } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", loading: false };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeUsername(e) {
    const username = e.target.value;
    this.setState({ username: username });
  }

  onChangePassword(e) {
    const password = e.target.value;
    this.setState({ password: password });
  }

  render() {
    const handleLogin = (e) => {
      e.preventDefault();
      this.setState({ loading: true });
      this.props.login(this.state.username, this.state.password);

      setTimeout(() => {
        if (this.props.logined) {
          this.setState({ loading: false });
          this.props.history.push("/");
        }
      }, 500);
    };
    const required = (value) => {
      if (!value) {
        return (
          <div className="alert alert-danger" role="alert">
            This field is required!
          </div>
        );
      }
    };

    // if (isLoggedIn) {
    //   return <Redirect to="/profile" />;
    // }

    return (
      <div className="container">
        <div className="col-md-12">
          <div className="card card-container">
            <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" />
            <div className="container">
              <Form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChangeUsername} validations={[required]} />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChangePassword} validations={[required]} />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block" disabled={this.state.loading}>
                    {this.state.loading && <span className="spinner-border spinner-border-sm"></span>}
                    <span>Login</span>
                  </button>
                </div>

                <CheckButton style={{ display: "none" }} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
