import React from 'react';
import Smurf from './Smurf';

export default function Smurfs({ data }) {
    
    if (!data) return <h2>Loading Smurfs...</h2>
    return(
        <div className="smurf-box">
            {data.map( smurf => {
                return (
                 <Smurf data={smurf} key={smurf.id} />
                )
            })}
        </div>
)}