import { useState } from 'react'
import { TYPES } from '../data';


export default function Options({ updatePokemonList }) {

    const [type, setType] = useState("");
    const [inputText, setInputText] = useState("");

    function handleTypeChange(e) {
        if (e.target.value === "Select type") return;

        setType(e.target.value);
        updatePokemonList(e.target.value, "select");
    };

    function handleInputChange(e) {
        setInputText(e.target.value);
        updatePokemonList(e.target.value.toLowerCase(), "input"); // lower input text for iPhone use case
    };

    function handleReset() {
        setType("");
        setInputText("");
        updatePokemonList(null, "button");
    };


    return (
        <div className='d-flex mt-5 flex-column align-items-center flex-md-row justify-content-center'>
            <div className='d-flex test'>
                <select
                    className='form-select'
                    style={{
                        width: "8rem",
                        borderRadius: "15px"
                    }}
                    onChange={handleTypeChange}
                    value={type}
                >
                    <option>Select type</option>
                    {TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                <button
                    className='btn btn-danger rounded-pill ms-1'
                    onClick={handleReset}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg>
                </button>
            </div>
            <input
                type='text'
                value={inputText}
                className='ms-5 form-control'
                placeholder='Type to search for Pokemon'
                style={{ width: "15rem", borderRadius: "15px" }}
                onChange={handleInputChange}
            />
        </div>
    );
};
