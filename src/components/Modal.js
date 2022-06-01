export default function Modal({ setSelectedPokemon, selectedPokemon }) {

  function handleClick() {
    document.body.style.overflow = "auto"; // add scroll back to body
    setSelectedPokemon(null);
  }
  return (
    <div className="modal display-block">
      <div className="modal-main rounded border border-2">
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger mt-1 me-1 rounded-pill" onClick={handleClick} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div className="my-3 mx-auto d-flex flex-column">
          <p className="text-center fs-5 text-capitalize">{selectedPokemon.name}</p>
          <div className="d-flex justify-content-center">
            <img className="img-fluid" style={{ maxWidth: "100px" }} src={selectedPokemon.sprite} alt="pokemon" />
          </div>
          <div className="d-flex justify-content-center mb-3">
            {selectedPokemon.types.map(t => <img key={t.type.name} className="img-fluid" src={`images/${t.type.name}.png`} alt="type" />)}
          </div>
        </div>
      </div>
    </div>
  );
}