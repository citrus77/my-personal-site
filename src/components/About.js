import React from 'react';
import { SingleSkill } from '.';
import dataExports from './data';

const About = () => {
    const { getSkills } = dataExports
    const skills = getSkills();
    return (
        <>
            <h1>About</h1>
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