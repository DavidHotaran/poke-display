import { useState } from "react";
import Pokemon from "./Pokemon";
import Options from "./Options";
import { PokemonData } from "../pokemonData";

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
            <div className="text-center mt-3 container mx-auto border border-3 py-3 px-3">
                <h1>Poké-Display</h1>
                <p className="lead">View and filter Pokémon quickly! To start, either search by name in the input, or filter through the select option.</p>
                <p className="lead">Next, click on a Pokémon to see it's information!</p>
            </div>
            <Options updatePokemonList={updatePokemonList} />
            <div className="container shadow rounded border border-2 my-5">
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