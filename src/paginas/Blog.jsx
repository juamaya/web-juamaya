import React from 'react'
import Articulo from '../componentes/articulo/Articulo'
import coche from '../assets/images/cobra.png'
import data from '../assets/images/data-science-analisis-de-datos.jpg.webp'
import brain from '../assets/images/artificial_intelligence.png'
import machine_learning from '../assets/images/machine-learning.jpg'
const Blog = () => {
  return (
    <>
      <div>Blog</div>
      <Articulo blog="Inteligencia Artificial." imagen={brain}
        p1="La inteligencia artificial (IA), en el contexto de las ciencias de la computación, es una disciplina y un conjunto de capacidades cognoscitivas e intelectuales expresadas por sistemas informáticos o combinaciones de algoritmos cuyo propósito es la creación de máquinas que imiten la inteligencia humana para realizar tareas, y que pueden mejorar conforme recopilen información"
        p2="En la actualidad, la inteligencia artificial abarca una gran variedad de subcampos. Éstos van desde áreas de propósito general, aprendizaje y percepción, a otras más específicas como el Reconocimiento de voz, el juego de ajedrez, la demostración de teoremas matemáticos, la escritura de poesía y el diagnóstico de enfermedades. "
        p3="La inteligencia artificial es una nueva forma de resolver problemas dentro de los cuales se incluyen los sistemas expertos, el manejo y control de robots y los procesadores, que intenta integrar el conocimiento en tales sistemas, en otras palabras, un sistema inteligente capaz de escribir su propio programa."
        p4="Según Takeyas (2007) la IA es una rama de las ciencias computacionales encargada de estudiar modelos de cómputo capaces de realizar actividades propias de los seres humanos con base en dos de sus características primordiales: el razonamiento y la conducta" 
        url="#"/>
      <hr />
      <Articulo blog="Ciencia de Datos" imagen={data}
        p1="Data Science o ciencia de datos es una disciplina científica centrada en el análisis de grandes fuentes de datos para extraer información."
        p2="Para conseguir convertir esa información no estructurada o estructurada en contenido de valor, el Data Science combina herramientas de la matemática, estadística y/o informática, para que, con todo ello, pueda llegar a cumplir su objetivo, la optimización de la toma de decisiones."
        p3="La terminología Data Science ha estado presente desde los últimos 30 años, sin embargo, no es hasta la década de los 70 cuando el término empieza a usarse para referirse a los métodos de procesamiento de datos. Fue en 2001, cuando la ciencia de datos se separa del big data, y se proclama como una disciplina independiente."
        p4="Aprenda las herramientas, lenguajes y bibliotecas que utilizan los científicos de datos profesionales, incluidos Python y SQL" 
        url="#"
        />

      <hr />

      <Articulo blog="Machine learning " imagen={machine_learning}
        p1="El Machine Learning es una rama de la inteligencia artificial que hace posible el aprendizaje autónomo de las máquinas, sin necesidad de ser programadas expresamente para ello."
        p2="Aprendizaje supervisado: los algoritmos deducen la información a partir de datos a los que se les han asignado valores. Estos datos sirven para entrenar un modelo, mientras que un segundo conjunto de datos de prueba, permite determinar hasta qué punto es eficaz el modelo creado. Un ejemplo sería el cálculo del precio de una vivienda a partir de sus características. Presenta similitudes con un nuevo método denominado “aprendizaje por refuerzo”. En este tipo, el sistema aprende de los errores que comete hasta que encuentra la forma óptima de ejecutar una tarea. "
        p3="Aprendizaje no supervisado: los datos de entrenamiento se utilizan sin etiquetar. Los algoritmos detectan agrupaciones de datos o patrones ocultos sin que se precise intervención humana. Resultan muy útiles para descubrir semejanzas y diferencias en la información, de manera que se pueden aplicar a procesos como la"
        p4="Hoy día se utiliza en una amplísima variedad de ámbitos, como el reconocimiento facial a través de software, la detección de spam por parte del proveedor de correo electrónico o el reconocimiento de la voz, entre otros."
        url="#"
      />

      <hr />
    </>

  )
}

export default Blog