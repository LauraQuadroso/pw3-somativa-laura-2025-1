import { Outlet, Link } from 'react-router-dom'

import style from './NavBar.module.css'

const NavBar = ()=>{
    return(
<<<<<<< HEAD
        <>

            <nav className={style.navbar}>

                <ul className={style.list}>

                    <Link to='/'>
                        <li className={style.item}><img className={style.logo} src="./logo.png" alt="Logotipo" /></li>
                    </Link>
                    

                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>
                    
                    <Link to='/newBook'>
                        <li className={style.item}>CADASTRAR LIVROS</li>
                    </Link>
                    

                    <Link to='/listBook'>
                        <li className={style.item}>LISTAR LIVROS</li>
                    </Link>

                </ul>

            </nav>

            <Outlet />

        </>

=======
    <>
         <nav className={style.navbar}>
            <ul className={style.list}>

                <Link to='/'>
                    <li className={style.item}><img className={style.logo} src='./logo.png' alt='logo'/></li>
                </Link>
               
                <Link to='/'>
                    <li className={style.item}>HOME</li>
                </Link>
                
                <Link to='/newBook'>
                <li className={style.item}>CADASTRAR LIVROS</li>
                </Link>
                
                <Link to='listBook'>
                <li className={style.item}>LISTAR LIVROS</li>
                </Link>
             
            </ul>
         </nav>

         <Outlet />

    </>
>>>>>>> 920ec46ce5f39d33c98d1981592ab18668d97da2
    )
}

export default NavBar