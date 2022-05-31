import { useState } from "react";
import Pokemon from "./Pokemon";
import Options from "./Options";
import { PokemonData } from "../pokemonData";


// need list of initial pokemon
// need list of filtered pokemon
// need list of pokemon to fall back on


export default function PokemonGrid() {

    const [filteredPokemon, setFilteredPokemon] = useState(PokemonData); // this works now - might not later when we add more data
    const [displayPokemon, setDisplayPokemon] = useState(PokemonData);

    function updatePokemonList(value, updateType) {
        switch (updateType) {
            case "input":
                filterFromInput(value);
                break;
            case "select":
                filterFromSelect(value);
                break;
            case "button": // reset filtered options back to `all pokemon`
                setDisplayPokemon(PokemonData);
                break;
        };

    };

    function filterFromInput(value) { // filter all pokemon from a select option

        if (value === "") {
            setDisplayPokemon(filteredPokemon);
            return
        };

        if (filteredPokemon === null) {
            const temp = displayPokemon.filter((p) => p.name.startsWith(value));
            setDisplayPokemon(temp);
        } else {
            const temp = filteredPokemon.filter((p) => p.name.startsWith(value));
            setDisplayPokemon(temp);
        };
    };

    function filterFromSelect(value) { // filter all pokemon when `select` option is chosen
        const temp = PokemonData.filter(p => p.types[0].type.name === value || p.types[1]?.type.name === value);
        setFilteredPokemon(temp);
        setDisplayPokemon(temp);
    };

    return (
        <div>
            <Options updatePokemonList={updatePokemonList} />
            <div className="container border border-danger mt-5">
                <div className="row row-cols-3 row-cols-md-6 gap-2">
                    {displayPokemon.map(p =>
                    (<Pokemon
                        key={p.name}
                        name={p.name}
                        types={p.types}
                        sprite={p.sprite}
                    />
                    )
                    )}
                </div>
            </div>
        </div>
    );
};