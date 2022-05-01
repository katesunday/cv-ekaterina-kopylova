import React from 'react';
import s from './AllSkills.module.css';
import SC from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";


const AllSkills = () => {
    const description  =' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, ' +
        'alias animi cum cumque delectus earum error expedita facere facilis molestias necessitatibus non ' +
        'odio porro quaerat qui reiciendis. Accusantium, perspiciatis.'
    return (
        <div className={s.skillsBlock}>
            <div className={`${SC.container} ${s.skillsContainer}`}>
               <div className={s.skillsHeader}><h2>Skills</h2></div>
                <div className={s.skills}>
                    <Skill title={'JS'} description={description}/>
                    <Skill title={'CSS'} description={description}/>
                    <Skill title={'REACT'} description={description}/>
                </div>
            </div>
        </div>
    );
};

export default AllSkills;