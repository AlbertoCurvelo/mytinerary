import {connect} from 'react-redux'
import { useEffect,useState } from 'react'

const UserLoged = (props) =>{
  const [userInfo,setUserInfo]=useState(props.userlogged)
  useEffect(() => {
    console.log(props)
    setUserInfo(props.userlogged)
  }, [props.userlogged])
  /*falta recibir si alguien esta logueado y poner sus datos*/ 
  return (
    <>
      <div style={{
        backgroundImage:`url(${userInfo.urlPic})`
      }} className="userImg">
      </div>
      <div className="userLogedData">
      {userInfo.firtsName!==""
      ?<>
        <p>{userInfo.firtsName+" "+userInfo.lastName}</p>
        <p>{userInfo.mail}</p>
      </>
      :<></>
      }
      </div>
    </>
  )
}
const mapStateToProps = state =>{
  return {
    userlogged:state.authR.loggedUser
  }
}
export default connect(mapStateToProps,null)(UserLoged)