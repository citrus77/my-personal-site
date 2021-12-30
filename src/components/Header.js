import React from 'react';
import { Nav } from '.';

const Header = ({ path, getPath }) => {
    return (
        <div className='header'>
            <h1>Jason Lammers</h1>
            <Nav path={path} getPath={getPath} />
        </div>
    );
};

export default Header;