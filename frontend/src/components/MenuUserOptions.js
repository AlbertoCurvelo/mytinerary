import {connect} from 'react-redux'
import Login from './Login'
import Register from './Register'
import {useState} from 'react'
import authActions from '../redux/actions/authActions'
import {Alert} from 'rsuite'

const MenuUserOptions = (props) =>{
  const [loginOrRegister,setLoginOrRegister]=useState(false)
  return (
    props.userLogged &&
    !props.userLogged.token || props.userLogged===null
    ?<>
    <h5>{loginOrRegister ? 'Create an account' : 'Login'}</h5> 
    {
      loginOrRegister
      ?<Register closeDrawer={props.closeDrawer}/>
      :<Login closeDrawer={props.closeDrawer}/>
    }
    <p className="loginOrNot" node="button" onClick={()=>{
      setLoginOrRegister(!loginOrRegister)
      }}
      >or {!loginOrRegister ? 'create an account' : 'login'}
    </p>
    </>
    :props.userLogged && props.userLogged.whereAccount && <>
      <div className="menuLoged">
        <h5>User - Menu</h5>
        <div className="contentMenuUser">
          <p>Future functionalities</p>
        </div>
        <div className="logoutBar">
          <p style={{cursor: 'pointer'}} onClick={()=>{
          props.logout()
          setLoginOrRegister(false)
          props.closeDrawer()
          Alert.warning('Session has been successfully closed. Come back soon.',3500)
          }} className="logout">Logout</p>
        </div>
      </div>
      </>
  )
}
const mapStateToProps= state=>{
  return {
    userLogged:state.authR.loggedUser
  }
}
const mapDispatchToProps = {
  logout:authActions.logoutUser
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuUserOptions)