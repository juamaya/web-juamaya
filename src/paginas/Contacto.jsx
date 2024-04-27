import React from 'react'
import Formulario from '../componentes/formulario/Formulario'
 



const Contacto = () => {
  return (
    <>
      <div>Contacto</div>
      
 <Formulario/>
      <h1>Mapa en React con iframe</h1>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25647.64669164816!2d-6.205277724630604!3d36.53105982875719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dcc2483d623a7%3A0x71b44bb8c8947118!2s11510%20Puerto%20Real%2C%20C%C3%A1diz!5e0!3m2!1ses!2ses!4v1707587870395!5m2!1ses!2ses"  
      ></iframe>
    </>

  )
}

export default Contacto