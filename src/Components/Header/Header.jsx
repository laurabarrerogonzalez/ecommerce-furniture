import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="leftSection">
        <span className="logo">HOME</span>
      </div>
      <div className="rightSection">
        <input type="text" placeholder="🔍 Buscar" className="searchInput" />
        <div className="icon">Cart 🛒</div>
        <div className="icon-contact">Contact us📞</div>
      </div>
    </header>
  );
};

export default Header;