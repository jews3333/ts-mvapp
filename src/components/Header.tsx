import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    return (
        <header id="header">
            <NavLink to="/" className="header-logo"><span>LOGO</span></NavLink>
            <button className="header-nav-btn"><span>메뉴열기</span></button>
            <nav className="header-nav">
                <NavLink to="/"><span>HOME</span></NavLink>
            </nav>
        </header>
    )
}

export default Header;