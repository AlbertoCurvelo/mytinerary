import {connect} from 'react-redux'
import {TextInput,Button,Select} from 'react-materialize'
import {useState,useEffect} from 'react'
import authActions from '../redux/actions/authActions'
import {Alert,Message} from 'rsuite'
import GoogleLogin from 'react-google-login';

const Register = ({closeDrawer,newUserSave}) =>{ 
  const [errores, setErrores] = useState([])
  const [newUser,setNewUser]=useState({})
  const countries=require('../data/dataContryNames.json')
  //funciones
  const responseGoogle = async (response) => {
    if (response.error) {
        alert("Algo pasó...")
    } else {
        const respuesta = await newUserSave({
          firtsName: response.profileObj.givenName,
          lastName: response.profileObj.familyName,
          userName: response.profileObj.email,
          password: response.profileObj.googleId,
          mail: response.profileObj.email,
          urlPic:response.profileObj.imageUrl,
          contry:"Argentina",
          whereAccount:"google"
        })
        if (respuesta && !respuesta.success) {
            setErrores(respuesta.errores)
        } else {
          closeDrawer()
          Alert.success('the account has been created.',5000)
          Alert.success('The user has been successfully logged in.',4500)
        }
    }
  }
  function validationUserData (userData){
    setErrores([])
    let validate=false
    const {password,userName,mail,lastName,firtsName}=userData
    if(!userName || (userName.length==='')){
      validate=true
      setErrores([...errores,"Username cannot be empty or blank."])
    }
    if(!password || (password.length==='')){
      validate=true
      setErrores([...errores,"Password cannot be empty or blank."])
    }
    if(!mail || (mail.length==='')){
      validate=true
      setErrores([...errores,"Email cannot be empty or blank."])
    }
    if(!lastName || (lastName.length==='')){
      validate=true
      setErrores([...errores,"Last Name cannot be empty or blank."])
    }
    if(!firtsName || (firtsName.length==='')){
      validate=true
      setErrores([...errores,"Firts Name cannot be empty or blank."])
    }
  return validate
  }
  const enterKeyboard = e =>{
    //El numero 13 seria la tecla enter, si fue presionada envio la validacion
    //como si fuera el boton sign in
    if (e.charCode === 13) {
      validarUsuario(e)
    }
  }
  const validarUsuario = async e => {
    e.preventDefault()
    if (!validationUserData(newUser)) {
      setErrores([])
      const respuesta = await newUserSave(newUser)
      if (respuesta && !respuesta.success) {
          setErrores(respuesta.errores)
      } else {
        closeDrawer()
        Alert.success('the account has been created.',5000)
        Alert.success('The user has been successfully logged in.',4500)
      }
    }
  }
  const readInput=e=>{
    const campo=e.target.name.trim()
    const valor=e.target.value.trim()
    setNewUser({
      ...newUser,
      [campo]:valor
    })
  }
  //fin de funciones
  return(
    <div className="registerPage">
      <div className="socialNetwork">
      <p>Create from a social network</p>
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
        <p>Or enter the following data.</p>
      </div>
      <div className="registerForm">
        <TextInput name="firtsName" id="firtsName" label="First Name" onChange={readInput} onKeyPress={enterKeyboard}/>
        <TextInput name="lastName" id="lastName" label="Last Name" onChange={readInput} onKeyPress={enterKeyboard}/>
        <TextInput name="userName" id="username" label="UserName" onChange={readInput} onKeyPress={enterKeyboard}/>
        <TextInput name="mail" id="mail" label="Email" onChange={readInput} onKeyPress={enterKeyboard}/>
        <TextInput name="urlPic" id="urlPic" label="Url Pic" onChange={readInput} onKeyPress={enterKeyboard}/>
        <Select name="contry" id="Select-9" label="Choose your contry" multiple={false} onChange={readInput}
          options={{
            classes: '',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value="Argentina"
        >      
        {countries.map((contry,i)=>{
          return <option key={"selectCountry"+i} value={contry.value}>{contry.label}</option>
        })}
        </Select>
        <TextInput name="password" id="password" label="Password" onChange={readInput} onKeyPress={enterKeyboard} password/>
        <Button node="button" waves="light" onClick={validarUsuario}>
          Sign in
        </Button>
        <div className="errores">
            {errores.map((error,i) => 
            <Message closable showIcon key={'errorM'+i} type="error" description={error} className="messageError"/> )}
        </div>
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  newUserSave: authActions.newUser
}
export default connect(null,mapDispatchToProps)(Register)