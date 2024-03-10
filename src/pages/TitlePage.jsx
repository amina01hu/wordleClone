import {useState, React } from 'react';
import { NavLink } from "react-router-dom";

import '../style/TitlePage.css';

const TitlePage = () => {
    const [date, setDate] = useState(new Date());

  return (
    <section id="home">
        <img
        src="/square.png"
        height="100px"
        width="100px"
        alt="wordle box"
        />
        <h1>Wordle</h1>
        <p>Get 6 chances to guess a 5 letter word.</p>
        <button id="playButton">Play</button>
        <NavLink to="/login">
          <button id="secondButton">Log In</button>
        </NavLink>
        <NavLink to="/gamestart">
          <button id="secondButton">How to play</button>
        </NavLink>
        <p id="currentDate">{ date.toDateString() }</p>
    </section>
  )
}

export default TitlePage;
