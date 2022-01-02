import React from 'react';
import { Nav } from '.';

const Header = ({ path, getPath, setPath }) => {
    return (
        <div className='header'>
            <h1 className='me'>Jason Lammers</h1>
            <Nav path={path} setPath={setPath} />
        </div>
    );
};

export default Header;