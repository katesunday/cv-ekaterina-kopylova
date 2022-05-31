import React from 'react';
import s from './AllSkills.module.scss';
import SC from '../common/styles/Container.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/Title";



const AllSkills = () => {

    return (

        <div className={s.skillsBlock}>

            <div className={`${SC.container} ${s.skillsContainer}`}>
                <div className={s.skillsHeader}>
                    <Title title={'Skills'}/>
                </div>
                <div className={s.skills}>
                    <Skill title={'HTML5'} iconName={'html5'}/>
                    <Skill title={'CSS'} iconName={'css3'}/>
                    <Skill title={'Sass'} iconName={'sass'}/>
                    <Skill title={'JavaScript'} iconName={'javascript'}/>
                    <Skill title={'TypeScript'} iconName={'typescript'}/>
                    <Skill title={'React-redux'} iconName={'redux'}/>
                    <Skill title={'Storybook'} iconName={'storybook'}/>
                    <Skill title={'GIT'} iconName={'github'}/>
                </div>
            </div>
        </div>
    );
};

export default AllSkills;