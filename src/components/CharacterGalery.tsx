import {Character} from "../model/Character"
import CharacterCard from "./CharacterCard"
import "./CharacterGalery.css"

type CharacterGaleryProps ={
    characters : Character[]
}



export default function CharacterGalery({characters}: CharacterGaleryProps){

const singleCharacter = characters.map((char) =>{
    return (
        <div className={"card"}>
            <CharacterCard key = {char.id} character={char}/>
        </div>
    )

})

return (
    <div className={"cards"}>
        {singleCharacter}
    </div>

)
}