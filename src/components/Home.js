import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return <>
        <div id='landing'>
            <img src='img/profile.jpg' className='profile-pic' height='300' width='300' />
            <span>Hello! I am a Software Engineer specializing in Full Stack Web Development. Check out my porfolio for some examples of my projects!</span>
        </div>
    </>;
};

export default Home;