import React from 'react'
import './Usuario.css'


const Usuario = ({ name,   country, image }) => {
    return (
        <>
     
           <div className="card">
                <h2> {name}</h2>
             
                <img src={image}  />
                <h3>Pais:{country}</h3>
              

            </div>

       
           

        </>

    )
}

export default Usuario