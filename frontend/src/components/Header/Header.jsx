import React from 'react'
import estilos from './Header.module.css';
// import { Link } from 'react-router-dom';
// import logo from './logo.svg';

const Header = () => {
    return (
        <header className={estilos.header}>
            <section className={estilos.sectionHeader}>
                <ul>
                    <li>Contato</li>
                    <li>Parcerias</li>
                    <li>Sobre nós</li>
                </ul>
            </section>
        </header>
    )
}

export default Header
