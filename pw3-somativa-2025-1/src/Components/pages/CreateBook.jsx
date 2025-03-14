import React from "react";
import {useState} from "react";
import style from './CreateBook.module.css';


import Input from '../form/input';
import Select from '../form/select'
import ButtonForm from "../form/ButtonForm";

const CreateBook = ()=>{

    //Cria a estrutura de state para os dados de livro

    const [book, setBook] = useState({});

    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value });
        console.log(book);

    }

    //captura de dados do select 

    function handlerChangeCategory(event){
        setBook({...book, category : event.target.options[event.target.selectedIndex].text})
    }


    //envio dos dados para a API

        function submit(event){
            event.preventDefault();
            console.log(book)
        }

    return(
        <section className={style.create_book_container}>
            <h1>CREATE BOOK</h1>

        <form onSubmit={submit}>
            <Input
            type='text'
            name='txt_livro'
            id='txt_livro' 
            placeholder='digite o nome do livro'
            handlerChange={handlerChangeBook}
            />

            <Input
            type='text'
            name='txt_autor'
            id='txt_autor'
            placeholder='digite o nome do livro'
            handlerChange={handlerChangeBook}
            />

            <Input
            type='text'
            name='txt_descricao'
            id='txt_descricao'
            placeholder='digite o nome do livro'
            handlerChange={handlerChangeBook}
            />

            <Select 
            name='slc_categoria'
            id='slc_categoria'
            text='Categoria livro'
            handlerChange={handlerChangeCategory}
            
            />
            
            <ButtonForm
            label='Cadastrar'/>
            
            </form>
        </section>
    )
}

export default CreateBook