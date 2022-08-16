import React from 'react';
import s from './HireMe.module.scss'
import SC from '../common/styles/Container.module.scss'
import Title from "../common/components/Title";

const AboutMe = () => {
    return (
        <div className={s.HireMeBlock} id = 'aboutMe'>
            <div className={`${SC.container} ${s.container}`}>
                <Title title={'Contacts'}/>
                <div>
                    {/*<a href='#'>Download resume </a>*/}
                    {/*<a href='#'>Hire me</a>*/}

                </div>

            </div>

        </div>
    );
};

export default AboutMe;