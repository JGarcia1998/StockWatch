import React from "react";
import { NavLink, Redirect } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="login__svg"></div>
        <h1 className="login__title">StockWatch</h1>
      </div>

      <div className="container">
        <div className="container__title-container">
          <p className="container__text">welcome</p>
          <h2 className="container__title">Register for an account</h2>
        </div>
        <div className="container__input-container">
          <p className="container__input-title">Username</p>
          <input
            className="container__input"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="container__input-container">
          <p className="container__input-title">Password</p>
          <input
            className="container__input"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="container__btn">Register</button>
        <p className="container__registration">Already have an account?</p>
        <NavLink className="container__register" to="/login">
          Login
        </NavLink>
      </div>
    </>
  );
}
