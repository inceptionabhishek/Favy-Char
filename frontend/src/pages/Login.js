import React from 'react';
import {
  useState
} from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const uri = "http://localhost:5000/api/user/validate";
    const data = {
      username: username,
      password: password
    };

    axios.post(uri, data)
      .then(res => {
        console.log(res.data);
        alert(res.data);
        if (res.data === "Login Successful") {
          localStorage.setItem("username", username);
          localStorage.setItem("isLoggedin", true);
          window.location.href = "/";
        }
      })
      .catch(err => {
        console.log(err);
      });

    
  }
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
          <h1 className="text-center">Login</h1>
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
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="examplePassword"
                  aria-describedby="passwordHelp"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
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

export default Login