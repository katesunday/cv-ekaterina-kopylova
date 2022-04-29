import React from 'react';
import s from './Main.module.css'
import SC from './../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainDiv}>
            <div className={SC.container}>
                <div className={s.description}>
                    <h3>Hello</h3>
                    <h5>my name bla bla bla</h5>
                    <span>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                    Accusantium aliquam architecto consequatur consequuntur dolore dolorum eligendi,
                    eum fugit impedit magnam maiores minus nam nisi,
                    quaerat rerum sapiente sint vel veritatis?</span>
                </div>
                <div className = {s.photo}>photo</div>
            </div>

        </div>
    );
};

export default Main;