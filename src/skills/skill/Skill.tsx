import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title:string
}
const Skill = (props:SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.skillLogo}>
                skill logo
            </div>
            <h3>{props.title}
                <div className={s.skillLoader}> </div>
            </h3>


        </div>
    );
};

export default Skill;