import { useState } from "react";
import Pokemon from "./Pokemon";
import Options from "./Options";

/** TODO:
 *  Filter off input recived
 *  Get Pokemon data from site - gif image + name, type, etc.
 */

export default function PokemonGrid() {

    const [pokemon, setPokemon] = useState([
        {
            "name": "1",
            "type": "fire"
        },
        {
            "name": "2",
            "type": "water"
        },{
            "name": "3",
            "type": "fire"
        },{
            "name": "4",
            "type": "water"
        },{
            "name": "5",
            "type": "fire"
        },{
            "name": "6",
            "type": "water"
        },
    ]);

    function updatePokemonList(value, updateType) {
        switch(updateType){
            case "input":
                console.log(value)
                break;
            case "select":
                console.log(value)
                break;
            case "button":
                console.log("reset")
                break;
        };

    };
    
    return (
        <div>
            <Options updatePokemonList={updatePokemonList}/>
            <div className="container border border-danger mt-5">
                <div className="row row-cols-3 row-cols-md-6 gap-2">
                    {pokemon.map(p => <Pokemon name={p.name} type={p.type}/>)}
                </div>
            </div>
        </div>
    );
};