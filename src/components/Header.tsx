import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header(){

    const backHandle = () => {
        window.history.back();
    }

    return (
        <header id="header">
            <button className="header-back-btn" onClick={backHandle}><span>뒤로가기</span></button>
            <NavLink to="/" className="header-logo"><strong>M</strong>oviewer</NavLink>
            <button className="header-nav-btn"><span>메뉴열기</span></button>
            <nav className="header-nav">
                <NavLink to="/"><span>HOME</span></NavLink>
            </nav>
        </header>
    )
}

export default Header;