import React from 'react';
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={s.nav}>
            <ul>
                <li>
                    <a href='#'>Main</a>
                </li>
                <li>
                    <a href=''>Skills</a>
                </li>
                <li>
                    <a href=''>Projects</a>
                </li>
                <li>
                    <a href=''>Experience</a>
                </li>
                <li>
                    <a href='#contacts'>Contacts</a>
                </li>

            </ul>
        </div>
    );
};

export default Nav;