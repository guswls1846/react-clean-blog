import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const Login = withRouter((props) => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [loading, setLoading] = useState(false);
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUserName(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassWord(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(false);
    dispatch({ type: "LOGIN", username: username, password: password });

    setTimeout(() => {
      if (state.loggined) {
        setLoading(false);
        props.history.push("/");
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

  return (
    <div className="container">
      <div className="col-md-12">
        <div className="card card-container">
          <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" />
          <div className="container">
            <Form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={state.loading}>
                  {loading && <span className="spinner-border spinner-border-sm"></span>}
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
});

export default Login;
