import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import Inicio from './paginas/Inicio'
import About from './paginas/About'
import Blog from './paginas/Blog'
import Portafolio from './paginas/Portafolio'
import Contacto from './paginas/Contacto'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <Router>
      <Navbar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </Router>

      <Footer />
        
   
    </div>
  )
}

export default App
