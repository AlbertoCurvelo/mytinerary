import {connect} from 'react-redux'

const UserLoged = (props) =>{
  /*falta recibir si alguien esta logueado y poner sus datos*/ 
  return (
    props.userlogged &&
    <>
      <div style={{
        backgroundImage:`url(${props.userlogged.urlPic})`
      }} className="userImg">
      </div>
      <div className="userLogedData">
      {props.userlogged.firtsName!==""
      ?<>
        <p>{props.userlogged.firtsName+" "+props.userlogged.lastName}</p>
        <p>{props.userlogged.mail}</p>
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