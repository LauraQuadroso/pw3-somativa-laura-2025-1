
import './App.css'

import BookCard from './Components/BookCard'

import capa_livro from './assets/cavernas_aco.jpg'

function App() {
 

  return (
    <>
      <div>
       <h1>Pw3-webapp-livraria </h1>

      <BookCard 
       titulo='As Cavernas de aço'
       autor='Izac Azimov'
       imagem= {capa_livro}
       />

       {/* <BookCard 
       titulo= 'o Sol desvelado' 
       autor='Arthur C.Clarck'
      imagem= 'vai aparer aqui'
       />

       <BookCard
      titulo='Neuromancer' 
      autor= 'Willian Gibson'
      imagem= 'vai aparer aqui'
       />  */}
      

      </div>
      
    </>
  )
}

export default App
