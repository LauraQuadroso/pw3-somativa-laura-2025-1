import Button from './Button'

import style from './BookCard.module.css'

const BookCard = ({cod_livro, nome_livro, autor_livro, imagem})=>{ 
    return (
    <div className={style.bookCard}>                    
        <h3 className={style.titulo}>{nome_livro}</h3>
        <p className={style.autor}>{autor_livro}</p>
        <img src={imagem} alt='Capa: Cavernas de aço'/>
        <Button label='DETALHE' />
    </div>
    )
}

export default BookCard