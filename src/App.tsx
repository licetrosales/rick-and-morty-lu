import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import CharacterGalery from "./components/CharacterGalery";
import {RICK_AND_MORTY_CHARACTERS} from "./data/rick_and_morty_characters";

function App() {
  return (
    <div className="App">
      <Header/>
        <CharacterGalery characters={RICK_AND_MORTY_CHARACTERS}/>
    </div>
  );
}

export default App;
