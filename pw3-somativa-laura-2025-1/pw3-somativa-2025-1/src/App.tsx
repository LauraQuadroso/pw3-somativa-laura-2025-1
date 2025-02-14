import './App.css'
import BookCard from './componets/BookCard'
import capa_livro from './assets/cavernas_aco.jpg'

function App() {
  
  return (
    <>
      <div>
       <h1>PW3 - WEAPP - LIVRARIA</h1>

       <BookCard 
        titulo = 'As Cavernas de Aço'
        autor = 'Isaac Azimov'
        imagem = {capa_livro}/>

      {/* <BookCard 
        titulo = 'O sol desvelado'
        autor = 'Isaac Azimov'
        imagem = 'Imagem'/>

      <BookCard 
        titulo = 'O Fim da Infancia'
        autor = 'Arthur C.Clark'   
        imagem = 'Imagem'/>

      <BookCard 
        titulo = 'Neuromancer'
        autor = 'William Gibson'
        imagem = 'Imagem'/> */}

      </div>
     
    </>
  )
}

export default App

  