import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { apiURL } from './services';
import ThreeLines from './components/ThreeLines';

function App() {

  const [halfDeck, setHalfDeck] = useState(null);
  
  const updateHalf = async () => {
    const response = await axios.get(`${apiURL}/new/draw/?count=21`)
    setHalfDeck(response.data.cards)
  }
    
  useEffect(()=>{
    updateHalf()
  },[])

  return (
    <div className="App">
      {!halfDeck ? <h1>Loading</h1> : <ThreeLines setHalfDeck={setHalfDeck} halfDeck={halfDeck} />}

    </div>
  );
}


export default App;
