import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { apiURL } from '../services/index';
import Line from './Line.js';


const ThreeLines = ({ pileTotal , deckID, updatePileTotal }) => {

  const [pileOne, setPileOne] = useState(null);
  const [pileTwo, setPileTwo] = useState(null);
  const [pileThree, setPileThree] = useState(null);

  const updatePiles = async () => {
    const addPileOne = await axios.get(`${apiURL}/${deckID}/pile/total/draw/?count=7`);
    await console.log('addPileOne', addPileOne.data.cards);
    const addPileTwo = await axios.get(`${apiURL}/${deckID}/pile/total/draw/?count=7`);
    await console.log('addPileTwo',addPileTwo.data.cards);
    const addPileThree = await axios.get(`${apiURL}/${deckID}/pile/total/draw/?count=7`);
    await console.log('addPileThree',addPileThree.data.cards);
    await setPileOne(addPileOne.data.cards);
    await setPileTwo(addPileTwo.data.cards);
    await setPileThree(addPileThree.data.cards);
}

const shuffle = async () => {
    const reAddPileOne = await axios.get(`${apiURL}/${deckID}/pile/total/add/?cards=${pileOne.map(card => card.code).join(",")}`);
    const reAddPileTwo = await axios.get(`${apiURL}/${deckID}/pile/total/add/?cards=${pileTwo.map(card => card.code).join(",")}`);
    const reAddPileThree = await axios.get(`${apiURL}/${deckID}/pile/total/add/?cards=${pileThree.map(card => card.code).join(",")}`);
    if(pileTotal.data.piles.total.remaining === 21) {
      await console.log('reAddPileOne',reAddPileOne.data.piles.total.remaining);
      await console.log('reAddPileTwo',reAddPileTwo.data.piles.total.remaining);
      await console.log('reAddPileThree',reAddPileThree.data.piles.total.remaining);
      if(reAddPileThree.data.piles.total.remaining === 21) {
        const response = await axios.get(`${apiURL}/${deckID}/pile/total/shuffle/`);
        await updatePiles()
      }
    }
}


useEffect(()=>{
  if (pileTotal) updatePiles();

},[pileTotal]);

    return (
        <div>
        <button onClick={shuffle}>Shuffle</button>
        {pileThree ?
          <Fragment>
            <Line updatePileTotal={updatePileTotal} updatePiles={updatePiles} pile={pileOne} number={1} />
            <Line updatePileTotal={updatePileTotal} updatePiles={updatePiles} pile={pileTwo} number={2} />
            <Line updatePileTotal={updatePileTotal} updatePiles={updatePiles} pile={pileThree} number={3} />
          </Fragment> : <h1>Loading</h1>}
        </div>
    )
}

export default ThreeLines;
