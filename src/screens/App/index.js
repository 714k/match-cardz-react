import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from '../Main';
import Game from '../Game';
import Settings from '../Settings';
import Login from '../Login';
import Register from '../Register';


const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Main} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </main>
  </div>
)

export default App