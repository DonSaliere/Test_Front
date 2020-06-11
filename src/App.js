import React from 'react';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import Navbar from './components/Navbar/Navbar';
import NewsContainer from './components/News/NewsContainer';
import Home from './components/Home/Home'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const App = () => {
  return (
    <div >
      <Navbar />
      <Route exact path='/'
        render={() => <Home />} />
      <Route path='/news'
        render={() => <NewsContainer />} />
      <Route path='/profile'
        render={() => <ProfileContainer />} />
      <Route path='/login'
        render={() => <LoginContainer />} />
    </div>
  );
}

export default App;
