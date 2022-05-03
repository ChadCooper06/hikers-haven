import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import Modal from "../Modal";
//import { useGlobalState } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";

function Register() {
  //const [ state, dispatch ] = useGlobalState();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
    navigate('/profile')
  }

  return (
    <Modal>
    <div className="c-form">
      <form onSubmit={handleRegister}>
        <div>Throw on your boots and join us!<br />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => handleChange('username', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pass">Password (8 characters minimum):</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passConf">Confirm Password:</label>
          <input
            type="password"
            id="passConf"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange('passwordConf', e.target.value)} />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="fname"
          
            required
            onChange={(e) => handleChange('firstName', e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lname"
            required
            onChange={(e) => handleChange('lastName', e.target.value)} />
        </div>
        <input
          type="submit"
          value="Register"
          disabled={(
            user.password &&
            user.password.length >= 8 &&
            user.password === user.passwordConf &&
            user.firstName &&
            user.lastName &&
            user.email
          ) ? false : true}
        />
      </form>
    </div>
    </Modal>
  )
}

export default Register;