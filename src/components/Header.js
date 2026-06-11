import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">StudyHub</Link>
          <label className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </label>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link to="/login" className="btn-outline">Вход</Link></li>
            <li><Link to="/register" className="btn-primary">Регистрация</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;