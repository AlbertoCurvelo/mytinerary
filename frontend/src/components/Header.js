import {connect} from 'react-redux'
import React from 'react';
import DropdownNav from './Dropdown'
import SideLoginOrRegister from './SideLoginOrRegister'

const Header = ({userLogged})=>{
  var isUser
  userLogged ? isUser=true : isUser=false
  
  return (
    <header className="App">
      <nav>
        <DropdownNav isUser={isUser}/>
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
export default connect(mapStateToProps,null)(Header)