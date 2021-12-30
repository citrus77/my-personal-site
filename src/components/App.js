import React, { useEffect, useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Header,
  Home,
  Portfolio
} from '.';

const App = () => {
  const [path, setPath] = useState('/');
  const getPath = () => {
    const {pathname} = location;
    setPath(pathname);
    return path;
  }

  useEffect(() => {
    try {      
      getPath();    
    } catch (error) {
      console.error(error);
    } 
  }, [path]);

  return (
    <div id='app'>
      <Header path={path} getPath={getPath}/>
      <main>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </main>
    </div>
  );
};

export default App;