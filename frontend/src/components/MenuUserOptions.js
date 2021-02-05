import {connect} from 'react-redux'
import Login from './Login'
import Register from './Register'
import {useState} from 'react'

const MenuUserOptions = (props) =>{
  const [loginOrRegister,setLoginOrRegister]=useState(false)
  return (
    props.userLogged.whereAccount!=='local'
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
    :<h1>menu logeado</h1>
  )
}
const mapStateToProps= state=>{
  return {
    userLogged:state.authR.loggedUser
  }
}
export default connect(mapStateToProps,null)(MenuUserOptions)