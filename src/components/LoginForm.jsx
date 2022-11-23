import React, { useState } from "react";

export default function LoginForm() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAccount((prevState) => ({ ...prevState, [id]: value }));
    console.log(account);
  };

  const validate = (values) => {
    const formErrors = {};
    if (values.username.trim() === "") {
      formErrors.username = "Username is required.";
    }
    if (values.password.trim() === "") {
      formErrors.password = "password is required.";
    }
    return formErrors; // Object.keys(formErrors).length === 0 ? null : formErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(account));
    if (errors) return;
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="container w-50">
        <div className="form-group mt-3">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            className="form-control mt-2"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            id="password"
            type="text"
            className="form-control mt-2"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
          )}
        </div>
        <button onClick={handleSubmit} className="btn btn-warning btn-sm m-2">
          Login
        </button>
      </form>
    </div>
  );
}
