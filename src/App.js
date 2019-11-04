import React, {useState, useEffect} from 'react';
import { getHalfDeck } from './services';
import ThreeLines from './components/ThreeLines';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'

function App() {

  const [halfDeck, setHalfDeck] = useState(null);

  const updateHalf = async () => {
    const response = await getHalfDeck()
    await setHalfDeck(response.data.cards)
  }

  useEffect(()=>{
    updateHalf()
  },[])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/start">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/start">
            <ThreeLines setHalfDeck={setHalfDeck} halfDeck={halfDeck} />
          </Route>
          <Route path="/">
            <h1>Hello World</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
