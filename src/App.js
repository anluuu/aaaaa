import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { getNewDeck, apiURL } from './services';
import ThreeLines from './components/ThreeLines';

function App() {

  const [newDeck, setNewDeck] = useState(null);
  const [cardsArray, setCardsArray] = useState([]);
  const [halfDeck, setHalfDeck] = useState(null);
  const [cardChoose, setCardChoose] = useState(false);
  const [pileTotal, setPileTotal] = useState(null);

  const updateDeck = async () => {
    const response =  await getNewDeck();
    await setNewDeck(response);
  }

  const drawFullDeckCards = async () => {
      const response = await axios.get(`${apiURL}/${newDeck.deck_id}/draw/?count=21`)
      await response.data.cards.forEach(card => {
        setCardsArray(codes => [...codes, card.code])
      })
  }

  const updateHalfDeck = async () => {
    if (cardsArray.length === 21) {
      const response = await axios.get(`${apiURL}/new/shuffle/?cards=${cardsArray.join(",")}`)
      await setHalfDeck(response.data)
      await console.log(response.data);
    }
  }

  const updatePileTotal = async () => {
    const response = await axios.get(`${apiURL}/${halfDeck.deck_id}/draw/?count=21`)
    await console.log('response', response);
    const addPileTotal = await axios.get(`${apiURL}/${halfDeck.deck_id}/pile/total/add/?cards=${response.data.cards
    .map(card => card.code).join(",")}`);
    await setPileTotal (addPileTotal)
    await console.log('addPileTotal', addPileTotal);
  }



  useEffect(() => {
    updateDeck();
  }, []);

  useEffect(() => {
    if (newDeck) drawFullDeckCards();

  },[newDeck])

  useEffect(() => {
    if(cardsArray.length === 21) updateHalfDeck();

  }, [cardsArray])

  useEffect(()=>{
    if(halfDeck) updatePileTotal();

  },[halfDeck])

  return (
    <div className="App">
      {!pileTotal ? <h1>Loading</h1> : <ThreeLines pileTotal={pileTotal} updatePileTotal={updatePileTotal} deckID={halfDeck.deck_id} /> }

    </div>
  );
}


export default App;
