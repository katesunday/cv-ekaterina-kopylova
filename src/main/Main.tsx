import React from 'react';
import s from './Main.module.scss'
import SC from '../common/styles/Container.module.scss'

const Main = () => {
    return (
        <div className={s.mainDiv}>
            <div className={SC.container}>
                <div className={s.description}>
                    <p>Hello!</p>
                    <p>My name is Kate.</p>
                    <p>I am front-end developer, based in Dubai. </p>
                </div>
                <div className = {s.photo}>photo</div>
            </div>

        </div>
    );
};

export default Main;