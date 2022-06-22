import React from 'react';
import SC from '../common/styles/Container.module.scss';
import s from './AllProjects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/Title";
import cssLayout from '../common/img/css-layout.png'
import soko from '../common/img/sokoban.webp'

const AllProjects = () => {
    const description  =' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, ' +
        'alias animi cum cumque delectus earum error expedita facere facilis molestias necessitatibus non ' +
        'odio porro quaerat qui reiciendis. Accusantium, perspiciatis.'
    const cssImage = {
        backgroundImage: `url(${cssLayout})`
    }
    const jsGAme = {
        backgroundImage: `url(${soko})`
    }
    return (
        <div className={s.allProjectsBlock}>
            <div className={`${SC.container} ${s.allProjectsContainer}`}>
                <div className={s.projectTitle}>
                    <Title title={'My projects'}/>
                </div>
                <div className={s.linksToProjects}>
                    <Project style = {cssImage} title={'CSS-Layout'} description={description}/>
                    <Project style = {jsGAme} title={'JS-game'} description={description}/>
                    <Project style = {cssImage} title={'Social Network'} description={description}/>
                    <Project style = {cssImage} title={'Todolist'} description={description}/>
                </div>

            </div>

        </div>
    );
};

export default AllProjects;