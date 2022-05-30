import React from 'react';
import s from './AllSkills.module.scss';
import SC from '../common/styles/Container.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AllSkills = () => {
    return (

        <div className={s.skillsBlock}>
            {/*<FontAwesomeIcon icon="fa-brands fa-sass" />*/}
            <div className={`${SC.container} ${s.skillsContainer}`}>
               <div className={s.skillsHeader}>
                   <Title title={'Skills'}/>
               </div>
                <div className={s.skills}>
                    <Skill title={'HTML5'} />
                    <Skill title={'CSS'} />
                    <Skill title={'Sass'} />
                    <Skill title={'JavaScript'} />
                    <Skill title={'TypeScript'} />
                    <Skill title={'React-redux'} />
                    <Skill title={'Storybook'} />
                    <Skill title={'GIT'} />
                </div>
            </div>
        </div>
    );
};

export default AllSkills;