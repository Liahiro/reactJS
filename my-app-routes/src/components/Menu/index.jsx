import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>Sobre</Link>
        </li>
        <li>
            <Link to='/contact'>Contato</Link>
        </li>
      </ul>

    </nav>
  )
}
