import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Header,
  Home,
  Portfolio
} from '.';

const App = () => {
  const [path, setPath] = useState('/');

  return (
    <div id='app'>
      <Header path={path} setPath={setPath} />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/about' element= { <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>        
      </main>
    </div>
  );
};

export default App;