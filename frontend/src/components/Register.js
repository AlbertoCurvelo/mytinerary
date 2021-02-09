import {connect} from 'react-redux'
import {TextInput,Button} from 'react-materialize'
import {useState,useEffect} from 'react'
import {SelectPicker} from 'rsuite'
import authActions from '../redux/actions/authActions'
import {Alert,Message} from 'rsuite'
const contries=require('../data/dataContryNames.json')

const Register = ({closeDrawer,newUserSave}) =>{ 
  const [errores, setErrores] = useState([])
  const [newUser,setNewUser]=useState({})
  useEffect(() => {
    document.querySelector('.rs-drawer-body').scrollTop = '400px'
  }, [errores])
  //funciones
  const CustomSelectPicker = ({ placement }) => (
    <SelectPicker
      size="sm"
      data={contries}
      appearance="subtle"
      placeholder="Contry"
      className="selCountries"
      placement={placement}
      onChange={()=>readInputSelect}
    />)
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
  const readInputSelect=(valor,evt)=>{
    console.log(evt)
    const campo="contry"
    setNewUser({
      ...newUser,
      [campo]:valor
    })
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
  
  console.log(newUser)
  return(
    <div className="registerForm">
      <TextInput
        name="firtName"
        id="firtName"
        label="First Name"
        onChange={readInput}
        onKeyPress={enterKeyboard}
      />
      <TextInput
        name="lastName"
        id="lastName"
        label="Last Name"
        onChange={readInput}
        onKeyPress={enterKeyboard}
      />
      <TextInput
        name="username"
        id="username"
        label="UserName"
        onChange={readInput}
        onKeyPress={enterKeyboard}
      />
      <TextInput
        name="mail"
        id="mail"
        label="Email"
        onChange={readInput}
        onKeyPress={enterKeyboard}
      />
      <TextInput
        name="urlPic"
        id="urlPic"
        label="Url Pic"
        onChange={readInput}
        onKeyPress={enterKeyboard}
      />
      <CustomSelectPicker placement="topStart"/>
      <TextInput
        name="password"
        id="password"
        label="Password"
        onChange={readInput}
        onKeyPress={enterKeyboard}
      />
      <Button
        node="button"
        waves="light"
        onClick={validarUsuario}
      >
      Sign in
    </Button>
    <div className="errores">
        {
        errores.map((error,i) => 
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
const mapDispatchToProps = {
  newUserSave: authActions.newUser
}
export default connect(null,mapDispatchToProps)(Register)