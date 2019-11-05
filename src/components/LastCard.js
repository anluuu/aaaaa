import React from 'react';
import { Link } from 'react-router-dom';


const LastCard = ({card, resetGame}) => {

  const handleClick = () => {
      resetGame()
  }

  return (
    <div>
      <div className="all-center">
        <h1 className="text-light"><strong>Is this your card?</strong></h1>
        <img src={card.image} className="center-image" alt="last card" width="200" />
        <br/>
      </div>
      <div className="text-center">
        <Link to="/play" className="btn btn-light m-1" onClick={handleClick}> Play Again </Link>
      </div>
    </div>
  )
}

export default LastCard;
