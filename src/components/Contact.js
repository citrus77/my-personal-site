import React from 'react';
import dataExports from './data';

const Contact = () => {
    const { getContactInfo } = dataExports;
    const contactInfo = getContactInfo();
    return (
        <div className='contact'>
            <h1>Get in touch!</h1>
            <div className='contact-info'>
                <div>{contactInfo.name}</div>
                <div>e-mail: 
                    <a href='mailto:{contactInfo.email}'>
                        {contactInfo.email}
                    </a>
                </div>
                <div>LinkedIn: 
                    <a href={contactInfo.linkedIn} target='_linkedin'>
                        {contactInfo.linkedIn}
                    </a>
                </div>
                <br />
                <div>Check out my GitHub @ 
                    <a href={contactInfo.github} target='_github'>
                        {contactInfo.github}
                    </a>!
                </div>
            </div>
        </div>
    );
};

export default Contact;