import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });
      // .then((res) => {
      //   if ((res.data = "exist")) {
      //     alert("User already exist");
      //     // history("/home");
      //   } else if ((res.data = "notexist")) {
      //     // alert("User have not sign up");
      //   }
      // });
    } catch (e) {
      alert("Wrong Credentials");
      console.log(e);
    }
  }

  return (
    <div className="res">
      <h1>REGISTER</h1>
      <form action="POST">
        <input
          type="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
          name=""
          id=""
        ></input>
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
          Register
        </button>

        <br />
        <p>OR</p>
        <br />
        <Link to="/login">Login Page</Link>
      </form>
    </div>
  );
}

export default Register;
