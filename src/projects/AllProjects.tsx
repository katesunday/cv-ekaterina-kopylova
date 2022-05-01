import React from 'react';
import SC from '../common/styles/Container.module.css';
import s from './AllProjects.module.css'
import Project from "./project/Project";

const AllProjects = () => {
    const description  =' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, ' +
        'alias animi cum cumque delectus earum error expedita facere facilis molestias necessitatibus non ' +
        'odio porro quaerat qui reiciendis. Accusantium, perspiciatis.'
    return (
        <div className={s.allProjectsBlock}>
            <div className={`${SC.container} ${s.allProjectsContainer}`}>
                <div className={s.projectTitle}>
                    <h3>My Projects</h3></div>
                <div className={s.linksToProjects}>
                    <Project title={'CSS-Layout'} description={description}/>
                    <Project title={'JS-game'} description={description}/>
                    <Project title={'Social Network'} description={description}/>
                    <Project title={'Todolist'} description={description}/>
                </div>

            </div>

        </div>
    );
};

export default AllProjects;