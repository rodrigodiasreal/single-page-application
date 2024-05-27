// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Importa o logo

function Header() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Elo Musical Logo" className="logo" />
      </div>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/register">Registrar</NavLink></li>
        <li><NavLink to="/login">Entrar</NavLink></li>
        <li><NavLink to="/add-music">Adicionar Música</NavLink></li>
        <li><NavLink to="/musics">Lista de Músicas</NavLink></li>
        <li><NavLink to="/profile">Perfil</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;
