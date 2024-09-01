import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputValueChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("values", loginCredentials);

    try {
      await axios
        .post("http://localhost:5005/login", loginCredentials)
        .then((resp) => console.log("resp >>>>>", resp));
    } catch (err) {
      console.log("err", err);
    }

    // logIn();
    // navigate("/dashboard");
  };

  return (
    <div>
      LoginPage
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={loginCredentials.username}
          onChange={handleInputValueChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={loginCredentials.password}
          onChange={handleInputValueChange}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginPage;
