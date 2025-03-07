import React from "react";
import style from './CreateBook.module.css';
import Input from '../form/input';
import Select from '../form/select'
import Button from "../Button";

const CreateBook = ()=>{
    return(
        <section className={style.create_book_container}>
            <h1>CREATE BOOK</h1>

            <Input
            type='text'
            name='txt_livro'
            id='txt_livro'
            placeholder='digite o nome do livro'
            />

            <Input
            type='text'
            name='txt_livro'
            id='txt_livro'
            placeholder='digite o nome do livro'
            />

            <Input
            type='text'
            name='txt_livro'
            id='txt_livro'
            placeholder='digite o nome do livro'
            />

            <Select 
            name='slc_categoria'
            id='slc_categoria'
            text='Categoria livro'
            
            />
            
            <Button 
            label='Cadastrar'/>
            
        </section>
    )
}

export default CreateBook