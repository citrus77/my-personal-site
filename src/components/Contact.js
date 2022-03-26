import React from 'react';
import dataExports from './data';

const Contact = () => {
    const { getAboutMe } = dataExports;
    const { email, name, linkedIn, github, resumeLnk } = getAboutMe();
    return (
        <div className='contact'>
            <h1>Get in touch!</h1>
            <br />
            <div className='contact-info'>
                <h3>{name}</h3>
                <br />
                <div>e-mail: <a href='mailto:{email}' target='_email'>
                        {email}
                    </a>
                </div>
                <div>LinkedIn: <a href={linkedIn} target='_linkedin'>
                        {linkedIn}
                    </a>
                </div>                
                <div>GitHub: <a href={github} target='_github'>
                        {github}
                    </a>
                </div>
                <br />
                <div>
                    You may view my resume <a href={resumeLnk} target='_resume'>here</a>!
                </div>
            </div>
        </div>
    );
};

export default Contact;