import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ path, getPath }) => {
    useEffect(() => {
        try {
            getPath();
        } catch (error) {
            console.error(error);
        }
    }, [path]);
    
    return <>
        <div className='nav'>
            <Link to='/' className={path === '/' ? 'nav-link active' : 'nav-link'} onClick={getPath}>Home</Link>
            <Link to='/portfolio' className={path === '/portfolio' ? 'nav-link active' : 'nav-link'} onClick={getPath} >Portfolio</Link>
            <Link to='/about' className={path === '/about' ? 'nav-link active' : 'nav-link'} onClick={getPath} >About</Link>
            <Link to='/contact' className={path === '/contact' ? 'nav-link active' : 'nav-link'} onClick={getPath} >Contact</Link>
        </div>
    </>;
};

export default Nav;
