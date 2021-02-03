import {SideNav,SideNavItem,TextInput,Button} from 'react-materialize'
import {useState} from 'react' 
import Login from './Login'
import Register from './Register'
import {Link} from 'react-router-dom'
import e from 'cors'

const UserSideNav = () =>{
  const [loginOrRegister,setLoginOrRegister]=useState(false)
  return (
    <SideNav
    id="SideNav-10"
    className="userSideNav"
    options={{
      draggable: false,
      edge: 'left',
      preventScrolling:true,
      closeOnClick:false
    }}
    trigger={<div node="button" className="user imagenes nav"></div>}
    >
      <SideNavItem 
          className="liUserNav"
          user={{
            background: require(`../assets/img/fondoDefault.webp`).default,
            email: '',
            image: require(`../assets/img/logoUser.png`).default,
            name: ''
          }}
          userView/>
      <SideNavItem divider />
        {
          loginOrRegister
          ?<Register/>
          :<Login/>
        }
      <SideNavItem>
        <Link to="#" className="loginOnRegister" onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
          setLoginOrRegister(!loginOrRegister)}}
        >or {!loginOrRegister ? 'create an account' : 'login'}
        </Link>
      </SideNavItem>
    </SideNav>
  )
}
export default UserSideNav