import Button from './Button'

import style from './BookCard.module.css'

<<<<<<< HEAD
const BookCard = ({cod_livro, nome_livro, autor_livro, imagem})=>{ 
    return (
    <div className={style.bookCard}>                    
        <h3 className={style.titulo}>{nome_livro}</h3>
        <p className={style.autor}>{autor_livro}</p>
=======
const BookCard = ({titulo, autor, imagem})=>{ 
    return (
    <div className={style.bookCard}>                    
        <h3 className={style.titulo}>{titulo}</h3>
        <p className={style.autor}>{autor}</p>
>>>>>>> 920ec46ce5f39d33c98d1981592ab18668d97da2
        <img src={imagem} alt='Capa: Cavernas de aço'/>
        <Button label='DETALHE' />
    </div>
    )
}

export default BookCard