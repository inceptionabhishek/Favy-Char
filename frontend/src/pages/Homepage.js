import React from 'react';
import './css/Homepage.css';
import HarryPotter from "./Images/harrypotterresponse.png";
import Walterwhite from "./Images/walterwhite.png";
import Rick from "./Images/rick.png";
function Homepage() {
  return (
    <div>
      <h2 className="text-center mt-3">Welcome to Favy-Chars</h2>
      <i>
        <h5 className="text-center">
          A place to find your favorite characters
        </h5>
      </i>
      <br></br>
      <div className="row">
        <div className="col-md-4">
          <div className="demo-content bg-alt">
            <img
              className="ExampleImage"
              alt="harry"
              src="http://hp-api.herokuapp.com/images/harry.jpg"
            ></img>
          </div>
        </div>
        <div className="col-md-4">
          <div className="demo-content bg-alt">
            <img
              className="ExampleImage"
              alt="Walter-White"
              src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            ></img>
          </div>
        </div>
        <div className="col-md-4">
          <div className="demo-content bg-alt">
            <img
              className="ExampleImage"
              alt="Rick"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            ></img>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center mt-3">
          Made by abhishek
          <br></br>
          <a href="https://github.com/inceptionabhishek">Link</a>
        </h5>
      </div>
    </div>
  );
}

export default Homepage