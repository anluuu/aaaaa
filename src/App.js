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
import { Container } from './components/layouts/Styles';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
`;

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Container>
        <Switch>
          <Route path="/play" component={ThreeLines}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
        </Container>
      </div>
    </Router>
  );
}



export default App;
