import {Dropdown,Divider} from 'react-materialize';
import {Link, NavLink} from 'react-router-dom'
import {Alert} from 'rsuite'

const DropdownNav =({userLogged,logout}) =>{
  return (
  <Dropdown
    id="Dropdown_6"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={ <Link to="" node="button"><i className="material-icons">menu</i></Link>}
  >
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/cities">Cities</NavLink>
    {userLogged.firtsName !== "" && <p onClick={()=>{
      logout()
      Alert.warning('Session has been successfully closed. Come back soon.',3500)
      }}>Logout</p>}
    {Object.entries(userLogged).length === 0 && <NavLink to="/admin">Admin</NavLink>}
    <Divider />
  </Dropdown>
  )
}
export default DropdownNav