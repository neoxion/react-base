import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Detail from './Detail'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/detail/:id' component={Detail} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
