import { useEffect, useState } from 'react';
import '../App.css'

export default function Modal({ setSelectedPokemon, selectedPokemon }) {

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    let ready = true;

    async function getData() {
      const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`);
      const data = await request.json();

      if (ready) {
        setPokemon(data);
      };
    };

    getData();
    return () => { ready = false };
  }, [])

  function handleClick() {
    document.body.style.overflow = "auto"; // add scroll back to body
    setSelectedPokemon(null);
  };

  function divClick(e) { // if click outside modal on doc body then close modal
    if (e.target.classList.contains('modal')) {
      document.body.style.overflow = "auto"; // add scroll back to body
      setSelectedPokemon(null);
    }
  }

  if (pokemon === null) return;

  return (
    <div className="modal display-block" onClick={divClick}>
      <div className="modal-main rounded">
        <div className="d-flex justify-content-end sticky-top">
          <button className="btn btn-danger mt-1 me-1 rounded-pill" onClick={handleClick} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div className="my-3 d-flex flex-column ">
          <p className="text-center text-capitalize display-6 ">{pokemon.name}</p>
          <p className="text-center fs-5 text-capitalize">Pokédex #{pokemon.id}</p>
          <div className="d-flex justify-content-center">
            <img className="img-fluid" style={{ maxWidth: "100px" }} src={pokemon.sprites.front_default} alt="pokemon" />
          </div>
          <div className="d-flex justify-content-center mb-3">
            {pokemon.types.map(t => <img key={t.type.name} className="img-fluid" src={`images/${t.type.name}.png`} alt="type" />)}
          </div>
          <div className='d-flex flex-column align-items-center'>
            <p className='fs-5 text-center'>Abilties</p>
            {pokemon.abilities.map(ability =>
              <div key={ability.ability.name}>
                <span className='text-decoration-underline'>{ability.ability.name} </span>
                <span className='ms-1 fw-light fst-italic'>{ability.is_hidden ? "(hidden)" : ""}</span>
              </div>
            )}
            <div>
            </div>
          </div>
          <div className='mx-2 mt-3'>
            {pokemon.stats.map(stat =>
              <div key={stat.stat.name} className="d-flex justify-content-start border">
                <span style={{ width: "150px" }}>{stat.stat.name}</span>
                <span className='testy' style={{ background: `${stat.base_stat <= 50 ? "#EF4444" : stat.base_stat > 50 && stat.base_stat <= 89 ? "#F59E0B" : "#16A34A"}`, width: `${stat.base_stat}px` }}></span>
                <span style={{ marginLeft: "auto" }}>{stat.base_stat}</span>
              </div>
            )}
            <div className='d-flex justify-content-between border'>
              <span>total</span>
              <span>{pokemon.stats.reduce((prev, curr) => prev + curr.base_stat, 0)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}