import React from 'react';
import {
  useState,
  useEffect
} from 'react';
import axios from 'axios';

function Favourites() {
  const uribreakingbad ="http://localhost:5000/api/favourites/breakingbad";
  const uriharrypotter ="http://localhost:5000/api/favourites/harrypotter";
  const [breakingbadFav,setBreakingbadFav]=useState([]);
  axios
    .post(uribreakingbad, {
      username:localStorage.getItem("username"),
    })
    .then(
      (response) => {
        setBreakingbadFav(response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );


  return (
    <>
      <h3>
        Breaking Bad characters :-
      </h3>

    </>
  )
}

export default Favourites