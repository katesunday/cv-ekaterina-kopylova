import React from 'react';
import s from './HireMe.module.css'
import SC from './../common/styles/Container.module.css'

const HireMe = () => {
    return (
        <div className={s.HireMeBlock}>
            <div className={`${SC.container} ${s.container}`}>
                <h2>I am available for remote work.</h2>
                <div>
                    <button>Hire me</button>
                </div>

            </div>

        </div>
    );
};

export default HireMe;