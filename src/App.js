import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import UserPage from './components/UserPage/UserPage';
import API from './API';
import LandingPage from './components/LandingPage/LandingPage';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends Component {

  state = {
    loggedIn: false,
    currentUser: null
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      API.getCurrentUser(token)
        .then(user => this.setState({ loggedIn: true, currentUser: user }))
    }

  }

  getCurrentUser = (newUser) => {
    this.setState({ loggedIn: true, currentUser: newUser })
  }

  handleLogOut = () => {
    localStorage.clear('token')
    this.setState({ loggedIn: false, currentUser: null })
  }

  render() {
    return (
      <div className="main-page">
        <NavBar loggedIn={this.state.loggedIn} handleLogOut={this.handleLogOut} />
        {/* <div className='show-page'>SHOW PAGE</div> */}
        <Route exact path='/user/signup/' render={(props) => <SignUp {...props} getCurrentUser={this.getCurrentUser} />} />
        <Route exact path='/user/login/' render={(props) => <LogIn {...props} getCurrentUser={this.getCurrentUser} />} />
        <Route exact path='/user/main' render={(props) => <UserPage {...props} user={this.state.currentUser} />} />
        <Route exact path='/' component={LandingPage}/>
      </div>
    );
  }
}

export default App;
