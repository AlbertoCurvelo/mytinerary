import {TextInput,Button} from 'react-materialize'
import {useState} from 'react'

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
  const validUser = async e => {
    e.preventDefault()
    if (userLogin.username === '' || userLogin.password === '') {
        alert("Todos los campos son obligatorios")
        return false
    }
    setErrores([])
    const respuesta = await props.loginUser(userLogin)
    if (respuesta && !respuesta.success) {
        setErrores([respuesta.mensaje])
    } else {
        alert("Bienvenido!")
    }
  }

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
      onChange={leerInput}
      validate
        />
      <TextInput
        className="userPassword"
        id="userPassword"
        label="Password"
        onChange={leerInput}
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
        {errores.map(error => <h2>{error}</h2>)}
      </div>
    </div>
  )
}
export default Login
