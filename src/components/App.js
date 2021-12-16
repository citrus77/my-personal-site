import * as React from 'react';
import { Route } from 'react-router-dom';
import { 
  About,
  Header,
  Home
} from '.';

const App = () => {
    return (
      <div>
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </div>
    );
};

export default App;