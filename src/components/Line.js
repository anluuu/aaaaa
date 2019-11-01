import React, { Fragment } from 'react';

const Line = ({ pile, number, updatePileTotal }) => {

    return (
        <div>
        {pile.map(card => (
          <Fragment key ={card.code}>
              <img src={card.image} style={cardStyle} key={card.code} alt=''/>
          </Fragment>
        ))}
        </div>
    )
}

const cardStyle = {
  width: '150px',
  cursor: 'pointer'

}

export default Line;
