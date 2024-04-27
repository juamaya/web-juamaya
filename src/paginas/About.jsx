import React from 'react'
import Usuario from '../componentes/usuario/Usuario'
import JavaScript from '../assets/images/JS.png'
import aboutME from '../assets/images/aboutJuan.png'
import astro from '../assets/images/astro.png'
import markdown from '../assets/images/markdown.png'
import cobra from '../assets/images/cobra.png'
import sandero from '../assets/images/sandero_2024.jpg'
import '../App.css'

const About = () => {
  return (
    <>
     <div>About</div>

     <div className="container">

     <img src={aboutME} width="100%" />
     <Usuario  name=" Markdown"  country= " España" image={markdown}/>
     <Usuario  name="Dacia Sandero 2024"  country= " España" image={sandero}/>
     <Usuario  name="Astro"  country= " España" image={astro}/>
     <Usuario  name="JavaScript"  country= " España" image={JavaScript}/>
   
     <Usuario  name="Cobra"  age={54} country= " España" image={cobra}/>
    
     </div>
    </>
    
  )
}

export default About