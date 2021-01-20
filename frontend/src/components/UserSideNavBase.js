import {SideNav,SideNavItem,TextInput,Button} from 'react-materialize' 
const UserSideNav = () =>{
  
  return (
    <SideNav
    id="SideNav-10"
    className="userSideNav"
    options={{
      draggable: true
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
        style={{
          marginRight: '5px'
        }}
        waves="light"
        /*onClick={() => {setEspera(true)
        setValidar(!validar)}}*/
        className="bLogin modal-trigger"
        id="#bLogin"
      >
        sign in
      </Button>
    </div>
    </SideNav>
  )
}
export default UserSideNav