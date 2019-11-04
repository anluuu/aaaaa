import React, { Fragment } from 'react';

const Line = ({ pile, lineNum, selectLine }) => {

  const handleClick = () => {
    selectLine(lineNum)
  }

    return (
        <div style={cardStyle} onClick={handleClick}>
        {pile.map(card => (
              <img src={card.image} style={cardEach} key={card.code} alt=''/>
        ))}
        </div>
    )
}

const cardEach = {
  width: '150px',
  cursor: 'pointer',
  border: '1px solid black'
}

const cardStyle = {
  display: 'flex',
  width: 'min-content',
  marginBottom: '10px'

}

export default Line;
