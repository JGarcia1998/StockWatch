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
          <p className="container__text">welcome back</p>
          <h2 className="container__title">Log into your account</h2>
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
        <button className="container__btn">Login now</button>
        <p className="container__registration">Not registered yet?</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLink className="container__register" to="/register">
            Register
          </NavLink>{" "}
          <p
            style={{
              marginLeft: "1rem",
              color: "rgb(182, 182, 182)",
              fontSize: "1.2rem",
            }}
          >
            or
          </p>
          <button className="container__guest">Log in as guest</button>
        </div>
      </div>
    </>
  );
}
