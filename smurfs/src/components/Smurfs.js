import React from 'react';
import ReactDOM from 'react-dom';

export default function Smurfs({ data }) {
    if (!data) return <h2>Loading Smurfs...</h2>
    return(
        <>
            {data.map( smurf => {
                return(
                <>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
                <p>{smurf.id}</p>
                <p>{smurf.name}</p>
                </>
                )
            })}
        </>
    )
}