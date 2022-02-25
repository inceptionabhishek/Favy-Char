import React from "react";
import {Link} from 'react-router-dom';


const buttonClick = (e) => {
  e.preventDefault();
  localStorage.setItem("isLoggedin", "false");
  window.location.reload();
};
function AppbarComponent() {
  return (
    <div class="m-4">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <bold>
            <h1>Favy-Chars</h1>
          </bold>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/harrypotter" className="nav-item nav-link">
                Harry Potter
              </Link>
              <Link to="/breakingbad" className="nav-item nav-link">
                Breaking Bad
              </Link>
              <Link to="/rickandmorty" className="nav-item nav-link">
                Rick and Morty
              </Link>
              <Link to="/getall" className="nav-item nav-link">
                All users
              </Link>
              {localStorage.getItem("isLoggedin") === "true" ? (
                <>
                  <Link to="/favourites" className="nav-item nav-link">
                    Favourites
                  </Link>
                  <button onClick={buttonClick} className="nav-item nav-link">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signup" className="nav-item nav-link">
                    Sign Up
                  </Link>
                  <Link to="/login" className="nav-item nav-link">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AppbarComponent;
