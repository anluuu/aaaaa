import React, { useState, useEffect, Fragment } from 'react';
import Line from './Line.js';
import { getLineNumber } from '../services'

const ThreeLines = ({ halfDeck }) => {

  const [pileOne, setPileOne] = useState([]);
  const [pileTwo, setPileTwo] = useState([]);
  const [pileThree, setPileThree] = useState([]);
  const [finalDeck, setFinalDeck] = useState([]);
  const [repeat, setRepeat] = useState(3);
  const [card, setCard] = useState(null);

  useEffect(() => {
    setPileOne(halfDeck.slice(0,7))
    setPileTwo(halfDeck.slice(7,14))
    setPileThree(halfDeck.slice(14,21))

  }, [halfDeck])

  useEffect(()=>{
    if(repeat === 0) setLastCard(finalDeck)
  },[repeat])

  const setLastCard = async (deck) => {
    await setCard(deck[10])
  }

  const selectLine = async (lineNum) => {
    const response = await getLineNumber(lineNum, pileOne, pileTwo, pileThree);
    const { newPileOne, newPileTwo, newPileThree,newDeck } = response;
      setPileOne(newPileOne);
      setPileTwo(newPileTwo);
      setPileThree(newPileThree);
      setFinalDeck(newDeck)
      setRepeat(repeat -1)
  }

    return (
        <div>
        {card === null ?
          <Fragment>
            <Line pile={pileOne} selectLine={selectLine} lineNum={1} />
            <Line pile={pileTwo} selectLine={selectLine} lineNum={2} />
            <Line pile={pileThree} selectLine={selectLine} lineNum={3} />
          </Fragment> : <img src={card.image} alt='last card' /> }
        </div>
    )
}

export default ThreeLines;
