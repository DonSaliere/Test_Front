import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class NavbarContainer extends React.Component {
    render() {
      return <Navbar user={this.props} />
    }
  }
  
  const mapStateToProps = state => ({
  })
  
  const mapDispatchToProps = dispatch => ({})
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)