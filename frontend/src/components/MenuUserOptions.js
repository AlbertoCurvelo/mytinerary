import {connect} from 'react-redux'
import Login from './Login'
import Register from './Register'
import {useState} from 'react'
import authActions from '../redux/actions/authActions'

const MenuUserOptions = (props) =>{
  const [loginOrRegister,setLoginOrRegister]=useState(false)
  return (
    props.userLogged &&
    !props.userLogged.token || props.userLogged===null
    ?<>
    <h5>{loginOrRegister ? 'Create an account' : 'Login'}</h5> 
    {
      loginOrRegister
      ?<Register/>
      :<Login closeDrawer={props.closeDrawer}/>
    }
    <p className="loginOrNot" node="button" onClick={()=>{
      setLoginOrRegister(!loginOrRegister)
      }}
      >or {!loginOrRegister ? 'create an account' : 'login'}
    </p>
    </>
    :props.userLogged && props.userLogged.whereAccount && <>
      <h1>menu logeado</h1>
      <p style={{cursor: 'pointer'}} onClick={()=>{
      props.logout()
      setLoginOrRegister(false)
      props.closeDrawer()
      }} className="logout">Logout</p>
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