import React from 'react';
import p from './Profile.module.css';

const Profile = (props) => {
  let logOut = () => {
    props.logOut();
};
  return (
    <React.Fragment>
      <div className={`${p.container} ${'text-center'}`}>
        <h3>Профиль</h3>
        <p>Ваш логин: {props.user}</p>
        <button onClick={logOut} className="btn btn-primary btn-sm">Выйти</button>
      </div>
    </React.Fragment>
  )
}
export default Profile
