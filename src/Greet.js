import React from 'react';

Greet.defaultProps = {
    color: 'green'
}

function Greet({
    whom, 
    how, 
    color
}) {
    
    return(
        <div 
        style={{
            // color: color || 'red'
            color
        }}
        className="card greet">
        <h1>{how}, {whom}!</h1>
        </div>
    );

};



export default Greet;