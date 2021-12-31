import React from 'react';
import dataExports from './data';
import { SingleProject } from '.';

const Portfolio = () => {
    const { getProjects } = dataExports;
    const projects = getProjects();
    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            {
                projects.map(project => <SingleProject key={project.id} project={project} />)
            }
        </div>
    );
};

export default Portfolio;