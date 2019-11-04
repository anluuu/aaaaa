import React from 'react';
import ThreeLines from './components/ThreeLines';
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path="/start" component={ThreeLines}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;
