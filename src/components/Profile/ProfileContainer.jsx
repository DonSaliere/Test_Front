import { connect } from 'react-redux';
import Profile from './Profile';
import { logOutInCreator } from '../../Redux/auth-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Profile);

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      let action = logOutInCreator();
      dispatch(action);
    }
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default ProfileContainer;