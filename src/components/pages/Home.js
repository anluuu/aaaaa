import React from 'react';
import { Link } from 'react-router-dom'


const Main = () => {

  return (
    <div className="all-center">
      <h1 className="text-light">21 CARD TRICK</h1>
        <div className="">
          <h2 className="text-light">HOW TO PLAY</h2>
          <p className="text-light">Mentally choose a card and select the line where your card is three times</p>
          <Link className="btn btn-light" to="/play"> Play </Link>
        </div>
    </div>
  )
}

export default Main;
