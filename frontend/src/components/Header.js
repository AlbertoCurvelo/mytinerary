import {connect} from 'react-redux'
import React from 'react';
import DropdownNav from './Dropdown'
import SideLoginOrRegister from './SideLoginOrRegister'
import authActions from '../redux/actions/authActions'
const Header = ({userLogged,logout})=>{
  return (
    <header className="App">
      <nav>
        <DropdownNav userLogged={userLogged} logout={logout}/>
        <SideLoginOrRegister/>
      </nav>
    </header>
  )
}
const mapStateToProps = state =>{
  return {
    userLogged:state.authR.loggedUser
  }
}
const mapDispatchToProps={
  logout:authActions.logoutUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)