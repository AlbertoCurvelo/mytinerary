import {Dropdown,Divider} from 'react-materialize';
import {Link, NavLink} from 'react-router-dom'

const DropdownNav =({isUser}) =>{
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
    {!isUser && <NavLink to="/admin">Admin</NavLink>}
    <Divider />
  </Dropdown>
  )
}
export default DropdownNav