import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import CharacterGalery from "./components/CharacterGalery";
import {RICK_AND_MORTY_CHARACTERS} from "./data/rick_and_morty_characters";
import ActionBar from "./components/ActionBar";
import {Character} from "./model/Character";
import axios from "axios";

function App() {

    const [searchText, setSearchText] = useState<string>("")
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        getCharacters()
    }, [])

    function getCharacters() {
        console.log("Start")
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                console.log("Request fertig")
                console.log(response.data.results)
                setCharacters(response.data.results)
            })
        console.log("ende")

    }

    function myFunction(searchText: string) {
        console.log("App")
        console.log((searchText))
        setSearchText(searchText)
    }

    const filteredCharacters = characters.filter((character: Character) => {

        if (character.name.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        }
        return false
    })

    return (
        <div className="App">
            <Header/>
            <ActionBar myCallbackFuntion={myFunction}/>
            <CharacterGalery characters={filteredCharacters}/>

        </div>
    );
}

export default App;
