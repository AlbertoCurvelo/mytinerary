import {connect} from 'react-redux'
import {TextInput,Button} from 'react-materialize'
import {useState} from 'react'
import authActions from '../redux/actions/authActions'
import {Alert,Message} from 'rsuite'
import GoogleLogin from 'react-google-login';

const Login = (props) =>{
  const [userLogin, setUserLogin] = useState({})
  const [errores, setErrores] = useState([])
  const leerInput = e => {
    const valor = e.target.value
    const campo = e.target.name
    setUserLogin({
        ...userLogin,
        [campo]: valor
    })
  }
  //funciones
  const responseGoogle = async response => {
    if (response.error) {
      Alert.error("Error connecting to google server")
    } else {
      const respuesta = await props.loginUser({
          userName: response.profileObj.email,
          password: response.profileObj.googleId
      })
      if (respuesta && !respuesta.success) {
          setErrores([respuesta.mensaje])
      } else {
          props.closeDrawer()
          Alert.success('You logged in successfully',3500)
      }
    }
  }
  function validationUserData (userData){
    setErrores([])
    let validate=false
    const {password,userName}=userData
    if(!userName || (userName.length==='')){
      validate=true
      setErrores(["Username cannot be empty or blank"
      ])
    }
    if(!password || (password.length==='')){
      validate=true
      setErrores(["Password cannot be empty or blank"
    ])
    }
  return validate
  }
  const enterKeyboard = e =>{
    //El numero 13 seria la tecla enter, si fue presionada envio la validacion
    //como si fuera el boton sign in
    if (e.charCode === 13) {
      validUser(e)
    }
  }
  const validUser = async e => {
    e.preventDefault()
    if(!validationUserData(userLogin)){
      const respuesta = await props.loginUser(userLogin)
      if (respuesta && !respuesta.success) {
        setErrores([respuesta.mensaje])
      } else {
          props.closeDrawer()
          Alert.success('The user has been successfully logged in',3500)
      }
    }
  }
  //fin funciones
  return (
    <div className="loginUser">
      <div className="socialNetwork">
        <p>Login from a social network</p>
        <div className="iconosRedes">
          <div className="googleIcon">
            <GoogleLogin
              clientId="60465909921-7m67djmblskurmq8p4ngv9t4obo210ct.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              icon={false}
              buttonText=""
            />
          </div>
        </div>
        <p>Or login with your credentials.</p>
      </div>
      <TextInput
      id="userName"
      name="userName"
      label="Username"
      onChange={leerInput}
      validate
        />
      <TextInput
        className="userPassword"
        id="userPassword"
        name="password"
        label="Password"
        onChange={leerInput}
        onKeyPress={enterKeyboard}
        password
      />
      <Button
        waves="light"
        /*onClick={() => {setEspera(true)
        setValidar(!validar)}}*/
        className="bLogin modal-trigger"
        id="#bLogin"
        onClick={validUser}
      >
      sign in
      </Button>
      <div className="errores">
        {errores.map((error,i) => 
        <Message 
          closable
          showIcon
          key={'errorM'+i}
          type="error"
          description={error}
          className="messageError"
        /> )}
      </div>
    </div>
  )
}
const mapStateToProps = state =>{
  return {
    loggedUser: state.authR.loggedUser
  }
}
const mapDispatchToProps={
  loginUser: authActions.loginUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
