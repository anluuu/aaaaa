import React, { useState, useEffect, Fragment } from 'react';
import Line from './Line.js';

const ThreeLines = ({ halfDeck }) => {

  const [pileOne, setPileOne] = useState([]);
  const [pileTwo, setPileTwo] = useState([]);
  const [pileThree, setPileThree] = useState([]);
  const [newNewDeck, setNewNewDeck] = useState(null);
  const [repeat, setRepeat] = useState(3);
  const [card, setCard] = useState(null);

  useEffect(() => {
    setPileOne(halfDeck.slice(0,7))
    setPileTwo(halfDeck.slice(7,14))
    setPileThree(halfDeck.slice(14,21))
    
  }, [halfDeck])

  const setLastCard = () => {
    if(repeat === 0) setCard(newNewDeck[10])
  }

  const selectLine = (lineNum) => {
    if(lineNum === 1){
      if(repeat > 0){
        setRepeat(repeat -1)
        let newDeck = pileTwo.concat(pileOne,pileThree)
        console.log(newDeck)
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
        setNewNewDeck(newDeck)        
      }
    }
    else if(lineNum === 2){
      if(repeat > 0){
        setRepeat(repeat -1)
        let newDeck = pileThree.concat(pileTwo,pileOne)
        console.log(newDeck)
        let newPileOne = []
        let newPileTwo = []
        let newPileThree = []
        for (let i=0;i<20;i = i + 3){
          newPileOne.push(newDeck[i])
          newPileTwo.push(newDeck[i + 1])
          newPileThree.push(newDeck[i + 2])
        }
        newDeck = newPileThree.concat(newPileTwo,newPileOne)
        setPileOne(newPileOne);
        setPileTwo(newPileTwo);
        setPileThree(newPileThree);
        setNewNewDeck(newDeck) 
      }
    }
    else if (lineNum === 3){
      if(repeat > 0 ){        
        setRepeat(repeat -1)
        let newDeck = pileTwo.concat(pileThree,pileOne)
        console.log(newDeck)
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
        newDeck = newPileTwo.concat(newPileThree,newPileOne)
        setNewNewDeck(newDeck)
      }
    }
  }
  useEffect(()=>{
    setLastCard()
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
