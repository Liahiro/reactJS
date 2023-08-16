import React from 'react'
import { Link } from 'react-router-dom';
import styles from './menu.css';

export default function Menu() {
  return (
        <nav>
            <img id="vermelho" src="./imagens/vermelho.jpg" alt="" />
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/historia'>História</Link>
                </li>
                <li>
                    <Link to='/personagens'>Personagens</Link>
                </li>
                <li>
                    <Link to='/mecanica'>Mecanico</Link>
                </li>
                <li>
                    <Link to='/criador'>Criador</Link>
                </li>
            </ul>
        </nav>

  )
}