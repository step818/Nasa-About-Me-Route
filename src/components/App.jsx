import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ground from './Ground';
import Header from './Header';
import About from './About';
import Galleries from './Galleries';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Ground}/>
        <Route path='/about' component={About}/>
        <Route path='/galleries' component={Galleries}/>
      </Switch>
    </div>
  );
}

export default App;