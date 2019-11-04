import React, { useState, useEffect, Fragment } from 'react';
import Line from './Line.js';

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

  const setLastCard = async (deck) => {
    await setCard(deck[10])
    console.log('carta final',deck[10])
    console.log('deck final',deck)
  }

  const selectLine = (lineNum) => {
    if(lineNum === 1){
        let newDeck = pileThree.concat(pileOne,pileTwo)
        let newPileOne = []
        let newPileTwo = []
        let newPileThree = []
        for (let i=0;i<20;i = i + 3){
          newPileOne.push(newDeck[i])
          newPileTwo.push(newDeck[i + 1])
          newPileThree.push(newDeck[i + 2])
        }
        setPileOne(newPileOne);
        setPileTwo(newPileTwo);
        setPileThree(newPileThree);
        let finalDeck = pileThree.concat(pileOne,pileTwo)
        setFinalDeck(finalDeck)
        setRepeat(repeat -1)
    }
    else if(lineNum === 2){

        let newDeck = pileOne.concat(pileTwo,pileThree)
        let newPileOne = []
        let newPileTwo = []
        let newPileThree = []
        for (let i=0;i<20;i = i + 3){
          newPileOne.push(newDeck[i])
          newPileTwo.push(newDeck[i + 1])
          newPileThree.push(newDeck[i + 2])
        }
        setPileOne(newPileOne);
        setPileTwo(newPileTwo);
        setPileThree(newPileThree);
        let finalDeck = pileOne.concat(pileTwo,pileThree)
        setFinalDeck(finalDeck)
        setRepeat(repeat -1)
    }
    else if (lineNum === 3){

        let newDeck = pileTwo.concat(pileThree,pileOne)
        let newPileOne = []
        let newPileTwo = []
        let newPileThree = []
        for (let i=0;i<20;i = i + 3){
          newPileOne.push(newDeck[i])
          newPileTwo.push(newDeck[i + 1])
          newPileThree.push(newDeck[i + 2])
        }
        setPileOne(newPileOne);
        setPileTwo(newPileTwo);
        setPileThree(newPileThree);
        let finalDeck = pileTwo.concat(pileThree,pileOne)
        setFinalDeck(finalDeck)
        setRepeat(repeat -1)
    }
  }
  useEffect(()=>{
    if(repeat === 0) setLastCard(finalDeck)
  },[repeat])

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
