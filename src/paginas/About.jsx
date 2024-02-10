import React from 'react'
import Usuario from '../componentes/usuario/Usuario'
import juan from '../assets/images/juan.jpg'
import '../App.css'

const About = () => {
  return (
    <>
     <div>About</div>

     <div className="container">
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>
     <Usuario  name=" Juan" age={54} country= " España" image={juan}/>

     </div>
    </>
    
  )
}

export default About