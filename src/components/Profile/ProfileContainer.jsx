import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    render() {
      return <Profile user={this.props} />
    }
  }
  
  const mapStateToProps = state => ({
    user: state.auth.user,
    isAuth: state.auth.isAuth
  })
  
  const mapDispatchToProps = dispatch => ({})
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)