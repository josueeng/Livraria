import React from 'react'
import './Header.scss'
import { Link } from "react-router-dom";

import Logo from '../../assets/Logo.png'
import Lupa from '../../assets/search.png'
export default function Header() {
    return (
        <div className='header'>
            <div className='Logo'>
                <img src={Logo} alt="Logo" />
                <p className="TextLogo">Livraria Vai na Web</p>
            </div>
            <nav className='Menu'>
                <ul className='MenuList'>
                    <li className='MenuItem'><Link className='TextLink' to="/"> Inicio</Link></li>
                    <li className='MenuItem'><Link className='TextLink' to="/doar"> Doar</Link></li>
                    <li className='MenuItem'><Link className='TextLink' to="/livros"> Livros</Link></li>

                </ul>
            </nav>
            <div className='ContPesq'>
                <input placeholder="  O que você procura  ?" className='InputPesquisar' type="text" />
                <img className='LupaPesqu' src={Lupa} alt=" Lupa de pesquisa em png" />
            </div>



        </div>
    )
}
