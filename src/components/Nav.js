import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

const Nav = ({ path, setPath }) => {
    const {pathname} = location;
    
    useEffect(() => {
       try {
           setPath(pathname)
       } catch (error) {
           console.error (error)
       };
    }, [path]);

    const handleSetPath = (pathName) => {
        setPath(pathName);
    };

    return <>
        <div className='nav'>            
            <Link
                to='/' 
                className={path === '/' ? 'nav-active' : 'nav-link'}
                onClick={ () => handleSetPath('/') }
            >Home</Link>
            <Link
                to='/portfolio'
                className={path === '/portfolio' ? 'nav-active' : 'nav-link'}
                onClick={ () => handleSetPath('/portfolio') }
            >Portfolio</Link>
            <Link 
                to='/about' 
                className={path === '/about' ? 'nav-active' : 'nav-link'}
                onClick={ () => handleSetPath('/about') }
            >About</Link>
            <Link 
                to='/contact' 
                className={path === '/contact' ? 'nav-active' : 'nav-link'}
                onClick={ () => handleSetPath('/contact') } 
            >Contact</Link>
        </div>
    </>;
};


export default Nav;
