/*Queria probar el flujo de los condicionales dentro de los useEffect y tambien renderizados 
condicionales, se muy bien que el sistema de Login se realizara de otra manera, solo que al añadir
el sidenav, sentí que deberia al menos hacer algo, y me puse a practicar un poco. 
Si leiste este comentario... ¡gracias por todo!*/

import {SideNav,SideNavItem,TextInput,Button} from 'react-materialize' 
import React, { useState , useEffect} from 'react'

const UserSideNav = () =>{
  const [userLogin,setUserLogin]=useState(false)
  const [validar,setValidar]=useState(false)
  const [espera,setEspera]=useState(false)
  const [userN,setUserN]=useState('')

  useEffect(() => {
   if(!userLogin){
    document.querySelector('.bLogin').innerText='Sign in'
    var userName=document.querySelector('#userName').value
    var userPassword=document.querySelector('#userPassword').value
    if(validar===true&&userName!==""&&userPassword!==""){
      setUserLogin(!userLogin)
      document.querySelector('#userName').value=""
      document.querySelector('#userPassword').value=""
      document.querySelector('.bLogin').innerText='Sign out'
      setUserN(userName)
    }else{
      setValidar(false)
    }
   }else{
    setUserLogin(!userLogin)
    setEspera(false)
    document.querySelector('.bLogin').innerText='Sign in'
    /*Coloque ese commit en linea 34 para eliminar un warning con respecto a la forma que use los Hooks*/
   } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validar])

  return (
    <SideNav
    id="SideNav-10"
    className="userSideNav"
    options={{
      draggable: true
    }}
    trigger={<div node="button" className="user imagenes nav"></div>}
    >
        {
          userLogin
          ?(<SideNavItem
            className="liUserNav"
            user={{
              background: 'https://placeimg.com/640/480/tech',
              email: '',
              image: require(`../assets/img/logoUserLoged.png`).default,
              name: userN
            }}
            userView/>)
          :(<SideNavItem 
          className="liUserNav"
          user={{
            background: require(`../assets/img/fondoDefault.webp`).default,
            email: '',
            image: require(`../assets/img/logoUser.png`).default,
            name: ''
          }}
          userView/>)
        }
      <SideNavItem divider />
      <div className="loginUser">
        {
          !userLogin
          ?<>
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
            </>
          :<></>
        }
        <Button
          style={{
            marginRight: '5px'
          }}
          waves="light"
          onClick={() => {setEspera(true)
                          setValidar(!validar)}}
          className="bLogin modal-trigger"
          id="#bLogin"
        >
          sign in
        </Button>
        {
        espera
        ?(!validar
          ?
          <div className="materialert error">
            <div className="material-icons">error_outline</div>
              Please... fill in all fields
          </div>
          :
          <div className="materialert success">
            <div className="material-icons">check</div>
              Welcome!
          </div>)
        :<></>
        }
      </div>
    </SideNav>
  )
}
export default UserSideNav