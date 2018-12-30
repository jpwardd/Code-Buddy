import React, { Component } from 'react'
import { Route, Switch} from 'react-router'
import Login from './components/Login'
import Welcome from './components/Welcome'
import { ProtectedRoute } from './components/ProtectedRoute';
import Dash from './components/dashboard/Dash';
import NavBar from './components/NavBar'




class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <div>
         <Switch>
           <Route exact path='/' component={Dash} />
           <Route exact path='/login' component={Login} />
         </Switch>
      </div>
      </div>
    );
  }
}

export default App;
