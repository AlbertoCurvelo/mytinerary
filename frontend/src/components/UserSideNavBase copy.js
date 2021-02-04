import {SideNav,SideNavItem,TextInput,Button} from 'react-materialize'
import {useState} from 'react' 
import Login from './Login'
import Register from './Register'
import e from 'cors'
import M from 'materialize-css'

const UserSideNav = () =>{
  const [loginOrRegister,setLoginOrRegister]=useState(false)
  return (
    <SideNav
    id="SideNav-10"
    className="fixed userSideNav"
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
        <p node="button" onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
          setLoginOrRegister(!loginOrRegister)
          M.Sidenav.getInstance(document.querySelector('.sidenav')).open()
      }}
        >or {!loginOrRegister ? 'create an account' : 'login'}
        </p> 
    </SideNav>
  )
}
export default UserSideNav