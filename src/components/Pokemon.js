export default function Pokemon({ pokemon, handleClick }) {  

    return(
        <div className="my-3 shadow rounded border border-2 mx-auto d-flex flex-column hover-me" onClick={() => handleClick(pokemon)}>
            <p className="text-center fs-5 text-capitalize">{pokemon.name}</p>
            <div className="d-flex justify-content-center">
             <img className="img-fluid" style={{maxWidth: "100px"}} src={pokemon.sprite} alt="pokemon"/>
            </div>
            <div className="d-flex justify-content-center mb-3">
                {pokemon.types.map(t => <img key={t.type.name} className="img-fluid" src={`images/${t.type.name}.png`} alt="type"/>)}
            </div>
        </div>
    );

};