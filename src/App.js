import React, {useState, useEffect} from 'react';
import { getHalfDeck } from './services';
import ThreeLines from './components/ThreeLines';

function App() {

  const [halfDeck, setHalfDeck] = useState(null);

  const updateHalf = async () => {
    const response = await getHalfDeck()
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
