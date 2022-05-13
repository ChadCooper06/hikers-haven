import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";

import jwtDecode from "jwt-decode";
import { Button } from "react-bootstrap";

function Login() {
  let navigate = useNavigate();

  const [, dispatch ] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
        navigate('/Home/')
        window.location.reload()
      });
  }

  return (
      <div className="c-form">
        <form onSubmit={handleLogin}>
          <div><h6 className="login-intro">Welcome back!</h6>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              minLength="8"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="outline-dark"
            type="submit"
            value="Sign in"
          >Login</Button>
        </form>
      </div>
  );
};

export default Login;