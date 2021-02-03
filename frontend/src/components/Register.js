import {TextInput,Select,Icon,Button} from 'react-materialize'
import {useState} from 'react'
const contries=require('../data/dataContryNames.json')

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
        placeholder="First Name"
        onChange={readInput}
      />
      <TextInput
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        onChange={readInput}
      />
      <TextInput
        name="username"
        id="username"
        placeholder="username"
        onChange={readInput}
      />
      <TextInput
        name="mail"
        id="mail"
        placeholder="Email"
        onChange={readInput}
      />
      <TextInput
        name="urlPic"
        id="urlPic"
        placeholder="url Pic"
        onChange={readInput}
      />
      <Select
        icon={<Icon>cloud</Icon>}
        id="selectContry"
        name="selectContry"
        multiple={false}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: false,
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
        value=""
      >
        <option disabled value="">Choose your contry</option>
        {contries.map((contry,i)=>{
          return (
            <option value={i}>{contry.name}</option>
          )
        })}
      </Select>
      <TextInput
        name="password"
        id="password"
        placeholder="Password"
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