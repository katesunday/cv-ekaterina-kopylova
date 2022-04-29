import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title:string
    description:string
}
const Skill = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.skillLogo}>
                skill logo
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>

        </div>
    );
};

export default Skill;