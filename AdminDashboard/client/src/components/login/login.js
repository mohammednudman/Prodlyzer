import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/login", { email, password });
      // .then((res) => {
      //   if ((res.data = "exist")) {
      //     history("/home");
      //   } else if ((res.data = "notexist")) {
      //     alert("User have not sign up");
      //   }
      // });
    } catch (e) {
      alert("Wrong Credentials");
      console.log(e);
    }
  }
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        ></input>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          name=""
          id=""
        ></input>
        <button type="submit" onClick={submit}>
          Login
        </button>

        <br />
        <p>OR</p>
        <br />
        <Link to="/register">Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;
