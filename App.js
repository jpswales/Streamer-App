import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import dashboard from './components/dashboard/dashboard';
import signIn from './components/authentication/signIn';
import signUp from './components/authentication/signUp';
import addFilm from './components/films/addFilm';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={dashboard} />
            <Route path='/login' component={signIn}/>
            <Route path='/signUp' component = {signUp}/>
            <Route path='/addFilm' component = {addFilm}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
