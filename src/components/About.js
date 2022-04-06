import React from 'react';
import { SingleEdu, SingleSkill } from '.';
import dataExports from './data';

const About = () => {
    const { getAboutMe, getEducation, getSkills } = dataExports;
    const { description } = getAboutMe();
    const education = getEducation();
    const skills = getSkills();
    return <div className='about'>
        <h1>About</h1>
        <br />
        <div className='description'>{description}</div>
        <br />
        <br />
        <h2>Skills</h2>
        <div className='skills'>
            {
                skills ? skills.map(skill => <SingleSkill key={skill.id} skill={skill} />) : null
            }
        </div>
        <br />
        <br />
        <h2>Education</h2>
        <div className='education'>
            {
                education.map(edu => <SingleEdu key={edu.id} edu={edu} />)
            }
        </div>
    </div>;
};

export default About;