import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Registation.css";

export const Registation = () => {
  const [registation, setRegistation] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [record, setRecord] = useState([]);
   
  const registationForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistation({ ...registation, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newRecord = { ...registation, id: new Date().getTime().toString() }
    setRecord([...record, newRecord]);
    setRegistation({
    username: "", 
    email: "",
    password: "",
    mobile: "",
  });
    
  }
  return (
    <div className="app__registation app__bg" id="Registation">
      <Navbar />
      <div className="app__registation-contant">
        <h1>Registation</h1>
        <form action="#" onSubmit={submitForm}>
          <div className="registation_name">
            <label htmlFor="username">Nmae</label>
            <input
               type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              autoComplete="off"
              required
              value={registation.username}
              onChange={registationForm}
            />
          </div>

          <div className="registation_email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              required
              value={registation.email}
              onChange={registationForm}
            />
          </div>
          <div className="registation_password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              autoComplete="off"
              required
              value={registation.password}
              onChange={registationForm}
            />
          </div>
          <div className="registation_mobile">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter Mobile"
              autoComplete="off"
              required
              value={registation.mobile}
              onChange={registationForm}
            />
          </div>
          <div className="registation_button">
            <button type="submit">
              Registation
            </button>
          </div>
          <div className="alreay-has-account">
            <p >Already has an account.</p>
            <Link to="/login" > login?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
