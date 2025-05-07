import React from "react";
import {useState, useEffect} from "react";
import style from './CreateBook.module.css';


import Input from '../form/input';
import Select from '../form/select'
import ButtonForm from "../form/ButtonForm";

const CreateBook = ()=>{

    //Cria a estrutura de state para os dados de livro

    const [book, setBook] = useState({});

    //Cria a estrutura de state para os dados de categoria

    const [categories, setCategories] = useState([]);





    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value });
        console.log(book);

    }

    



    //captura de dados do select 

    function handlerChangeCategory(event){
        setBook({...book, cod_categoria : event.target.options[event.target.selectedIndex].text})
    }


    //envio dos dados para a API

        function submit(event){
            event.preventDefault();
            console.log(book)
        }


//Recupera os dados de categoria da API REST
        useEffect(()=>{
            fetch('http://127.0.0.1:5000/listagemCateorias',{
                method: 'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Acces-Control-Allow-Headers':'*'
                }
            }).then((resp)=>
                resp.json()
            ).then((categorias)=>{
                console.log('TESTE :' + categorias.data);
            }).catch((error) => {
                console.log('ERRO: ' + error)
            });
        }, []);

    return(
        <section className={style.create_book_container}>
            <h1>CREATE BOOK</h1>

        <form onSubmit={submit}>
            <Input
            type='text'
            name='nome_livro'
            id='nome_livro' 
            placeholder='digite o nome do livro'
            handlerChange={handlerChangeBook}
            />

            <Input
            type='text'
            name='autor_livro'
            id='autor_livro'
            placeholder='digite o nome do livro'
            handlerChange={handlerChangeBook}
            />

            <Input
            type='text'
            name='descricao_livro'
            id='descricao_livro'
            placeholder='digite o nome do livro'
            handlerChange={handlerChangeBook}
            />

            <Select 
            name='cod_categoria'
            id='cod_categoria'
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