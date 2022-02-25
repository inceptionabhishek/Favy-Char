import {useState} from 'react';
import { Link, Route, Routes } from "react-router-dom";
import AppbarComponent from "./components/AppbarComponent";
import Homepage from './pages/Homepage';
import Harrypotter from './pages/Harrypotter';
import BreakingBad from './pages/BreakingBad';
import RickandMorty from './pages/RickandMorty';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favourites from './pages/Favourites';
import GetallUsers from './pages/GetallUsers';

function App() {
  const [isLoggedin, setIsloggedin] = useState(
    localStorage.getItem("isLoggedin")
  );
  return (
    <>
      <AppbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="harrypotter" element={<Harrypotter />} />
        <Route path="breakingbad" element={<BreakingBad />} />
        <Route path="rickandmorty" element={<RickandMorty />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="getall" element={<GetallUsers />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
