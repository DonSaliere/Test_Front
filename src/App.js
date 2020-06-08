import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import "bootstrap/dist/css/bootstrap.css";

const App = (props) => {
  return (
    <div >
       <NavbarContainer />
       <Route path='/profile'
          render={() => <ProfileContainer />} />
        <Route path='/login'
          render={() => <LoginContainer />} />
    </div>
  );
}

export default App;
