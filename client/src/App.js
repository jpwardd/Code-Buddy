import React, { Component } from 'react'
import { Route, Switch} from 'react-router'
import Login from './components/Login'
import Welcome from './components/Welcome'
import { ProtectedRoute } from './components/ProtectedRoute';
import Home from './components/Home';




class App extends Component {
  render() {
    return (
      <div className="App">
         <Switch>
           <Route exact path='/' component={Welcome} />
           <Route exact path='/login' component={Login} />
           <Route exact path="/home" component={Home} />
         </Switch>
      </div>
    );
  }
}

export default App;
