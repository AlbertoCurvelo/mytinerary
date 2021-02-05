import {TextInput,Icon,Button} from 'react-materialize'
import {useState} from 'react'
import {SelectPicker} from 'rsuite'
const contries=require('../data/dataContryNames.json')

const CustomSelectPicker = ({ placement }) => (
  <SelectPicker
    size="sm"
    data={contries}
    appearance="subtle"
    placeholder="Contry"
    className="selCountries"
    placement={placement}
  />
  )

const Register = () =>{
  const [newUser,setNewUser]=useState({})
  const readInput=e=>{
    const campo=e.target.name.trim()
    const valor=e.target.value.trim()
    setNewUser({
      ...newUser,
      [campo]:valor
    })
  }

  return(
    <div className="registerForm">
      <TextInput
        name="firtName"
        id="firtName"
        label="First Name"
        onChange={readInput}
      />
      <TextInput
        name="lastName"
        id="lastName"
        label="Last Name"
        onChange={readInput}
      />
      <TextInput
        name="username"
        id="username"
        label="UserName"
        onChange={readInput}
      />
      <TextInput
        name="mail"
        id="mail"
        label="Email"
        onChange={readInput}
      />
      <TextInput
        name="urlPic"
        id="urlPic"
        label="Url Pic"
        onChange={readInput}
      />
      <CustomSelectPicker placement="topStart"/>
      <TextInput
        name="password"
        id="password"
        label="Password"
        onChange={readInput}
      />
      <Button
        node="button"
        waves="light"
      >
      Sign in
    </Button>
    </div>
  )
}
export default Register