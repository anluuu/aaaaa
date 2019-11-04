import React from 'react';

const Line = ({ pile, lineNum, selectLine }) => {

  const handleClick = () => {
    selectLine(lineNum)
  }

    return (
        <div className="cardStyle m-1" onClick={handleClick}>
        {pile.map(card => (
              <img src={card.image} style={cardEach} key={card.code} alt=''/>
        ))}
        </div>
    )
}

const cardEach = {
  width: '150px',
  cursor: 'pointer',
}

export default Line;
