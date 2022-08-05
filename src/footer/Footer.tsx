import React from 'react';
import s from './Footer.module.scss'
import logoLinkedin from './../common/img/linkedin.png'

const Footer = () => {
    return (
        <div className={s.footerDiv}>
            <div className={s.socialNetworks}>
                <a href='https://www.linkedin.com/in/ekaterina-kopylova-55a760226/' target="_blank" rel="noreferrer" >
                    <img className={s.linkedinLogo} src={logoLinkedin} alt="linkedin"/>
                </a>
            </div>
            <div>
                <p className={s.copyright}>© 2022 Ekaterina Kopylova. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;