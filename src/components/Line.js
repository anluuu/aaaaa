import React from 'react';
import { EachCard, CardStyle } from './layouts/Styles'

const Line = ({ pile, lineNum, selectLine }) => {

  const handleClick = () => {
    selectLine(lineNum)
  };

    return (
        <CardStyle onClick={handleClick}>
        {pile.map(card => (
              <EachCard src={card.image} key={card.code} alt={card.code}/>
        ))}
        </CardStyle>
    )
};


export default Line;
