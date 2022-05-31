export default function Pokemon({name, types, sprite}) {  

    return(
        <div className="my-3 border border-primary mx-auto d-flex justify-content-center hover-me">
            <p>{name}</p>
            <img src={sprite}/>
        </div>
    );

};