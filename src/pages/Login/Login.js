import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="app__loging app__bg " id="Loging">
      <Navbar />

      <div className="app__loging-contant">
        <h1>LogIn</h1>
        <form action="#" onSubmit={submitForm}>
          <div className="loging_email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loging_password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              autoComplete="off"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loging-button">
            <button type="submit">
              Loging
            </button>
          </div>
         <div className="signup">
            <p >You have not any account.</p>
            <Link to="/registation" > signup?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
