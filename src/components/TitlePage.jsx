import React from 'react'
import '../style/TitlePage.css'

const TitlePage = () => {
  return (
    <section id="home">
        <img
        src="../public/square.png"
        height="100px"
        width="100px"
        alt="wordle box"
        />
        <h1>Wordle</h1>
        <p>Get 6 chances to guess a 5 letter word.</p>
        <button id="playButton">Play</button>
        <button id="secondButton">Log In</button>
        <button id="secondButton">How to play</button>
        <p id="currentDate">March 7th, 2024</p>
    </section>
  )
}

export default TitlePage;
