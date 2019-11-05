import React, { useState, useEffect, Fragment } from 'react';
import Line from './Line.js';
import { getLineNumber, getHalfDeck } from '../services';
import Spinner from '../components/layouts/Spinner.js';
import LastCard from './LastCard';

const ThreeLines = () => {

  const [pileOne, setPileOne] = useState([]);
  const [pileTwo, setPileTwo] = useState([]);
  const [pileThree, setPileThree] = useState([]);
  const [finalDeck, setFinalDeck] = useState([]);
  const [repeat, setRepeat] = useState(3);
  const [card, setCard] = useState(null);
  const [halfDeck, setHalfDeck] = useState(null);

  const resetGame = async () => {
    await setPileOne([])
    await setPileTwo([])
    await setPileThree([])
    await setFinalDeck([])
    await setRepeat(3)
    await setHalfDeck(null)
    await setCard(null);
    await updateHalf();
  }

  const updateHalf = async () => {
    const response = await getHalfDeck()
    await setHalfDeck(response.data.cards)
  }

  useEffect(()=>{
    updateHalf()
  },[])

  useEffect(() => {
    if(halfDeck){
      setPileOne(halfDeck.slice(0,7))
      setPileTwo(halfDeck.slice(7,14))
      setPileThree(halfDeck.slice(14,21))
    }

  }, [halfDeck])

  useEffect(()=>{
    if(repeat === 0) setLastCard(finalDeck)
    // eslint-disable-next-line
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
        {!halfDeck ? <Spinner/> : null}
          {card ? <LastCard card={card} resetGame={resetGame} /> : <Fragment>
            <Line pile={pileOne} selectLine={selectLine} lineNum={1} />
            <Line pile={pileTwo} selectLine={selectLine} lineNum={2} />
            <Line pile={pileThree} selectLine={selectLine} lineNum={3} />
          </Fragment>}

        </div>
    )
}

export default ThreeLines;
