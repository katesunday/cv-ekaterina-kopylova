import React , {useState} from 'react';
import s from './Header.module.scss'
import SC from '../common/styles/Container.module.scss'
import Nav from "../nav/Nav";
//@ts-ignore
import {CSSTransition} from "react-transition-group";

const Header = () => {
    const [active , setActive] = useState(false)
    const onCloseHandler = () => {
        setActive(!active)
    }
    return (
        <div className={s.headerDiv}>
            <div className={SC.container}>
                <div className={active ? s.menuButtonActive : s.menuButton} onClick={() => {
                    setActive(!active)
                }}>
                    <span className={s.before}> </span>
                    <span className={s.main}> </span>
                    <span className={s.after}> </span>
                </div>

                <CSSTransition
                    in={active}
                    timeout={0}
                    classNames="myNode"
                    unmountOnExit
                    appear
                    onEntered={() => setActive(true)}
                    onExit={() => setActive(false)}
                >
                    {active ? <Nav onClose={onCloseHandler}/> : <></>}

                </CSSTransition>

            </div>


        </div>
    );
};

export default Header;