import React, { useState } from 'react';
import { Route } from 'react-router-dom';
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