export default function Modal({ setSelectedPokemon, selectedPokemon }) {
    return (
        <div className="modal display-block">
          <section className="modal-main">
            <p>{selectedPokemon.name}</p>
            <button type="button" onClick={() => setSelectedPokemon(null)}>
              Close
            </button>
          </section>
        </div>
      );
}