import React from 'react';
import { SingleSkill } from '.';
import dataExports from './data';

const About = () => {
    const { getAboutMe, getEducation, getSkills } = dataExports
    const skills = getSkills();
    const { description } = getAboutMe();
    const education = getEducation();
    console.log(education)
    return (
        <>
            <h1>About</h1>
            <br />
            <div className='description'>{description}</div>
            <br />
            <h2>Skills</h2>
            <div className='skills'>
                {
                    skills.map(skill => <SingleSkill key={skill.id} skill={skill} />)
                }
            </div>
        </>
        
    );
};

export default About;