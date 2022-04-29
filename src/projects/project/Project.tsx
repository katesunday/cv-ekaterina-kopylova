import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title:string
    description:string
}
const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.oneProjectBlock}>
            <div className={s.projectPic}>pic</div>
            <h4>{props.title}</h4>
            <span>{props.description}</span>

        </div>
    );
};

export default Project;