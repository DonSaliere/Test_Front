import React from 'react';
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  if (!props.user.isAuth) {
    return <Redirect to={"/login"} />;
  }
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {props.user.user}</p>
    </React.Fragment>
  )
}
export default Profile
