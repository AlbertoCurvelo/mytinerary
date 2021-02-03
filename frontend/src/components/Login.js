import {TextInput,Button} from 'react-materialize'

const Login = () =>{
  return (
    <div className="loginUser">
      <div className="socialNetwork">
        <p>Login from a social network</p>
        <div className="iconosRedes">
          <div className="googleIcon"></div>
        </div>
        <p>Or login with your credentials.</p>
      </div>
      <TextInput
      id="userName"
      label="Username"
      validate
        />
      <TextInput
        className="userPassword"
        id="userPassword"
        label="Password"
        password
      />
      <Button
        waves="light"
        /*onClick={() => {setEspera(true)
        setValidar(!validar)}}*/
        className="bLogin modal-trigger"
        id="#bLogin"
      >
      sign in
      </Button>
    </div>
  )
}
export default Login
