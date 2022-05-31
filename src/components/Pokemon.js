export default function Pokemon({name, types, sprite}) {  

    return(
        <div className="my-3 shadow rounded border border-2 mx-auto d-flex flex-column hover-me">
            <p className="text-center fs-5 text-capitalize">{name}</p>
            <div className="d-flex justify-content-center">
             <img className="img-fluid" style={{maxWidth: "100px"}} src={sprite}/>
            </div>
            <div className="d-flex justify-content-center mb-3">
                {types.map(t => <img key={t.type.name} className="img-fluid" src={`images/${t.type.name}.png`}/>)}
            </div>
        </div>
    );

};