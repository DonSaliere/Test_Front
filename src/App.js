import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper-content'>
       <NavbarContainer />
       <Route path='/profile'
          render={() => <ProfileContainer />} />
        <Route path='/login'
          render={() => <LoginContainer />} />
      </div>
    </div>
  );
}

export default App;
