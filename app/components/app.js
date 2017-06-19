import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Battle } from './battle/battle';
import { Results } from './battle/results';
import { Home } from './home/home';
import { Popular } from './popular/popular';
import { Nav } from './nav';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    )
  }
}
