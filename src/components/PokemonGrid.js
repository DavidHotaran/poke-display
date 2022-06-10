import { useState } from "react";
import Pokemon from "./Pokemon";
import Options from "./Options";
import { PokemonData } from "../pokemonData";
import Modal from "./Modal";

export default function PokemonGrid() {
    const [filteredPokemon, setFilteredPokemon] = useState(PokemonData); // this works now - might not later when we add more data
    const [displayPokemon, setDisplayPokemon] = useState(PokemonData);
    const [selectedPokemon, setSelectedPokemon] = useState(null); // pokemon to display in modal
    const [sliceValue, setSliceValue] = useState(9); // render only first 10

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
                setFilteredPokemon(PokemonData);
                break;
            default:
                break;
        };
    };

    function filterFromInput(value) { // filter all pokemon from a select option

        if (value === "") {
            setDisplayPokemon(filteredPokemon);
            return;
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

    function handleClick(pokemon) {
        setSelectedPokemon(pokemon);
        document.body.style.overflow = "hidden"; // remove scroll from body
    };

    return (
        <div>
            {selectedPokemon && (
                <Modal setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} />
            )}
            <div className="text-center mt-3 container mx-auto border border-3 py-3 px-3">
                <h1>Poké-Display</h1>
                <p className="lead">View and filter Pokémon quickly! To start, either search by name in the input, or filter through the select option.</p>
                <p className="lead">Next, click on a Pokémon to see it's information!</p>
            </div>
            <Options updatePokemonList={updatePokemonList} />
            <div className="container shadow rounded border border-2 mt-5 contain-overflow">
                <div className="row row-cols-3 row-cols-md-6 gap-2">
                    {displayPokemon.slice(0, sliceValue).map(p =>
                    (<Pokemon
                        key={p.name}
                        pokemon={p}
                        handleClick={handleClick}
                    />
                    )
                    )}
                </div>
            </div>
            <div className="d-flex justify-content-center my-3">
                <button className="btn btn-primary " onClick={() => setSliceValue(prev => prev += 10)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square me-1" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    More
                </button>
            </div>
        </div>
    );
};