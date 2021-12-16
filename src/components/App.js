import * as React from 'react';
import { Route } from 'react-router-dom';
import { 
  About,
  Header,
  Home,
  Portfolio
} from '.';

const App = () => {
    return (
      <div id='app'>
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </div>
    );
};

export default App;