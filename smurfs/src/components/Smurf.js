import React from 'react';

export default function Smurf({ data }) {
    if (!data || data===null) return <h2>Loading Smurfs...</h2>

    return(
        <div className="smurf">
            <p>{data.name}</p>
            <p>Age: {data.age}</p>
            <p>Height: {data.height}</p>
            {/* <p>Id: {smurf.id}</p> */}
        </div>
)}