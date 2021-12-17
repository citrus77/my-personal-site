import React from 'react';
import dataExports from './data';

const Contact = () => {
    const { getContactInfo } = dataExports;
    const { email, name, linkedIn, github} = getContactInfo();
    return (
        <div className='contact'>
            <h1>Get in touch!</h1>
            <div className='contact-info'>
                <div>{name}</div>
                <div>e-mail: <a href='mailto:{email}' target='_email'>
                        {email}
                    </a>
                </div>
                <div>LinkedIn: <a href={linkedIn} target='_linkedin'>
                        {linkedIn}
                    </a>
                </div>
                <br />
                <div>Check out my GitHub @ <a href={github} target='_github'>
                        {github}
                    </a>!
                </div>
            </div>
        </div>
    );
};

export default Contact;