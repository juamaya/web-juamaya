import React from 'react'

import pueblo from '../assets/images/puerto-real.jpg'

const Inicio = () => {
  return (
    <>
      <div>Inicio</div>
      <h2 className="titulo">Playa urbana de la Cachucha en Puerto Real.</h2>
      <hr />
      <img src={pueblo} width="100%" />
      <hr />
      <h2  >Ubicacion de la Playa   la Cachucha en Puerto Real.</h2>
      <hr />
      <iframe
        title="Google Map"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.18733625108!2d-6.186696825489214!3d36.52547457232671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dcc255705ccc1%3A0x9d8f94ae93b35c27!2sPlaya%20de%20la%20Cachucha!5e0!3m2!1ses!2ses!4v1707588082848!5m2!1ses!2ses"
      ></iframe>
    </>
  )
}

export default Inicio