import React from 'react'
import SC from '../common/styles/Container.module.scss'
import s from './AllProjects.module.scss'
import Project from './project/Project'
import Title from '../common/components/Title'
import cssLayout from '../common/img/css-layout.png'
import soko from '../common/img/sokoban.webp'
import studyCards from '../common/img/studyCards.png'
import todolist from '../common/img/todolist.png'

const AllProjects = () => {
    const studyCardsInfo = {
        demoLink: 'https://katesunday.github.io/new-project-ighw/',
        codeLink: 'https://github.com/katesunday/new-project-ighw',
        text: `Study Cards is a tool for learning and practicing for students. Each user can register,
        create their own cards with answers he needs and practice it anytime. Or simply user can search for
        other cards and train them as well. Created using Redux, Formik, Axios, Material UI. Email and password for 
                testing the APP are provided on login page.`,
    }

    const JSGame = {
        demoLink: 'https://katesunday.github.io/projectSokoban/',
        codeLink: 'https://github.com/katesunday/projectSokoban',
        text: `Well known game 'Sokoban' was written using only vanilla JS.
     It is a CRUD single page application using MVC pattern .
     Animation is performed at canvas.
     Database for users was created using Firebase. Feel free to try! `,
    }
    const todolistInfo = {
        demoLink: 'https://katesunday.github.io/todoList-ts/',
        codeLink: 'https://github.com/katesunday/todoList-ts',
        text: ` Todolist is usefull SPA for adding and monitoring your everyday tasks.
                Created using Redux Toolkit, Axios and styled with Material UI. Email and password for 
                testing the APP are provided on login page.`,
    }
    const cssTemplate = {
        demoLink:
            'https://katesunday.github.io/EkaterinaKopylova/maket-flex/index.html',
        codeLink:
            'https://github.com/katesunday/EkaterinaKopylova/blob/master/maket-flex/index.html',
        text: ` Here is one of the several pages that were created for online shop. Whole template is done using flexbox and Scss.
        Adaptive for different devices.`,
    }

    const cssImage = {
        backgroundImage: `url(${cssLayout})`,
    }
    const jsGAme = {
        backgroundImage: `url(${soko})`,
    }
    const studyCardsStyle = {
        backgroundImage: `url(${studyCards})`,
    }
    const todolistStyle = {
        backgroundImage: `url(${todolist})`,
    }
    return (
        <div className={s.allProjectsBlock} id="projects">
            <div className={`${SC.container} ${s.allProjectsContainer}`}>
                <div className={s.projectTitle}>
                    <Title title={'My projects'} />
                </div>
                <div className={s.linksToProjects}>
                    <Project
                        style={studyCardsStyle}
                        title={'Study Cards'}
                        description={studyCardsInfo}
                    />
                    <Project
                        style={todolistStyle}
                        title={'Todolist'}
                        description={todolistInfo}
                    />
                    <Project
                        style={jsGAme}
                        title={'JS-game'}
                        description={JSGame}
                    />
                    {/*<Project style={cssImage} title={'Social Network'} description={studyCardsInfo}/>*/}
                    <Project
                        style={cssImage}
                        title={'CSS-Template'}
                        description={cssTemplate}
                    />
                </div>
            </div>
        </div>
    )
}

export default AllProjects
