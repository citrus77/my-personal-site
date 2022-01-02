import React from 'react';

const SingleProject = ({ project }) => {
    return (
        <div className='project'>
            <h3>
                <span>
                    <a href={project.url} target='_project'>{project.project}</a>
                </span>
            </h3>
            <div className='proj-content'>
                <div>
                    <a href={project.url} target='_project'>
                        <img src={project.img} alt={project.project} className='proj-img' />
                    </a>
                </div>
                <div className='proj-desc'>
                    <div>{project.description}</div>
                    <div>
                        <a href={project.github} target='_github'>Project GitHub</a>
                    </div>
                    <br />
                    <h3>Contributers:</h3>
                    {
                        project.contributers.map(contributer => <div key={contributer.id} className='contributer'>
                                <div>{contributer.name}</div>
                                <div>
                                    <a href={contributer.github} target='_github'>{contributer.github}</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleProject;