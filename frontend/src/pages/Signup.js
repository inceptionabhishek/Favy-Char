import React from "react";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const uri = "http://localhost:5000/api/user/signup";
    const data = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post(uri, data)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        if (res.data === "success") {
          window.location.href = "/login";
        }else if(res.data==="User already exists"){
          alert("User already exists! Please use different username");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-4 col-lg-3">
          <div class="demo-content">
            <img
              alt=""
              src="https://i.gifer.com/ZFqe.gif"
              className="ExampleImage"
            />
          </div>
        </div>
        <div class="col-md-8 col-lg-6">
          <h1 className="text-center">Sign-up</h1>
          <div class="demo-content bg-alt">
            <form onSubmit={handleFormSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">UserName</label>

                <input
                  type="text"
                  class="form-control"
                  id="userNameId"
                  aria-describedby="userNameHelp"
                  placeholder="Enter Your UserName"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="userEmailId"
                  aria-describedby="userEmailHelp"
                  placeholder="Enter Your Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="examplePassword"
                  aria-describedby="passwordHelp"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passwordHelp" class="form-text text-muted">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </small>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
