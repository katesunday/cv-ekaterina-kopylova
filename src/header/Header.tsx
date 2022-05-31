import React , {useState} from 'react';
import s from './Header.module.scss'
import SC from '../common/styles/Container.module.scss'
import Nav from "../nav/Nav";

const Header = () => {
    const [active,setActive] = useState(false)
    const condition = active? 'active' : null
    return (
        <div className={s.headerDiv}>
            <div className={SC.container}>
                <div className={s.menuButton} onClick={()=>setActive(!active)} >
                    <span className={s.before}></span>
                    <span className={s.main}></span>
                    <span className={s.after}></span>
                </div>
                {!active &&<Nav/>}
            </div>


        </div>
    );
};

export default Header;