import React from 'react'


const Usuario = ({ name, age, country, image }) => {
    return (
        <>
     
           <div className="card">
                <h2>Usuario:{name}</h2>
                <h3>Edad:{age}</h3>
                <img src={image} />
                <h3>Pais:{country}</h3>
              

            </div>

       
           

        </>

    )
}

export default Usuario