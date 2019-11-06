import React from 'react';
import Card from './layouts/Card'
import { TextCenter, AllCenter, TextLight, LastCardImg, PlayAgain } from '../components/layouts/Styles';

const LastCard = ({card, resetGame}) => {

  const handleClick = () => {
      resetGame()
  };

  return (
    <div>
      <AllCenter>
        <TextLight>Is this your card?</TextLight>
        <LastCardImg src={card.image} alt="last card" />
        <br/>
      </AllCenter>
      <TextCenter>
        <PlayAgain to="/play" onClick={handleClick}> Play Again </PlayAgain>
        <Card />
      </TextCenter>
    </div>
  )
};

export default LastCard;
