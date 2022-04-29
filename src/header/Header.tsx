import React from 'react';
import s from './Header.module.css'
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={s.headerDiv}>
            <Nav/>
        </div>
    );
};

export default Header;