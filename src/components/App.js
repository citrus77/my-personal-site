import * as React from 'react';
import { Route } from 'react-router-dom';
import { 
  About,
  Contact,
  Header,
  Home,
  Portfolio
} from '.';

const App = () => {
    return (
      <div id='app'>
        <Header />
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