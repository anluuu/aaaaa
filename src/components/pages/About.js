import React from 'react';
import { FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <div className="text-light text-center">
      <h1>Sobre</h1>
      <p>Truque criado com a API <a href='https://deckofcardsapi.com'>https://deckofcardsapi.com</a></p>
      <div><FaGithub /><a className="lead" href="https://github.com/anluuu/21-card-trick">source</a></div>
    </div>

  );
};

export default About;
