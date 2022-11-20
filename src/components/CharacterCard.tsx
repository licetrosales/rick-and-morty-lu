import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterCardProps = {
   character : Character
}

export default function CharacterCard({character}: CharacterCardProps){

    return (
        <div className={"character-card"}>
           <h3>{character.name}</h3>
            <img src={character.image}/>
            <p>{character.origin.name} </p>
        </div>
    )

}