import React, { Component } from 'react'
import { Route, Switch} from 'react-router'
import Login from './components/Login'
import Welcome from './components/Welcome';



class App extends Component {
  render() {
    return (
      <div className="App">
         <Switch>
           <Route exact path='/' component={Login} />
           <Route exact path='/login' component={Login} />
         </Switch>
      </div>
    );
  }
}

export default App;
