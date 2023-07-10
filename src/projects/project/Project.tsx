import React from 'react'
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: {
        text: string
        demoLink?: string
        codeLink?: string
    }
    bgc?: string
    style: {}
}
const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.oneProjectBlock}>
            <div className={s.projectPic} style={props.style}>
                <div className={s.projectBtn}>
                    <a
                        href={props.description.demoLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Demo
                    </a>
                </div>
                <div className={s.projectBtn}>
                    <a
                        href={props.description.codeLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Code
                    </a>
                </div>
            </div>
            <h4>{props.title}</h4>
            <span>{props.description.text}</span>
        </div>
    )
}

export default Project
