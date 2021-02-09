import {connect} from 'react-redux'
import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeContent from './pages/HomeContent'
import Cities from './pages/Cities'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/styles.css'
import 'materialize-css/dist/js/materialize'
import City from './pages/City'
//modulo Admin
import Admin from './admin/Admin'
import ACities from './admin/Cities'
//Auth
import authActions from './redux/actions/authActions'

function App({userlogged,logingForLS}) {
  const [reload, setReload] = useState(false)
  var access
  if(userlogged.firtsName!==""){
    //falta condicional para el admin
    access=<>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomeContent} />
        <Route exact path="/cities" component={Cities} />
        <Route path="/cities/:id" component={City} />
        <Redirect to="/"/>
      </Switch>
    </>
  }else if(localStorage.getItem('token')){
    logingForLS(localStorage.getItem('token'))
    .then(respuesta => {
      console.log(respuesta)
      if(respuesta === '/') setReload(!reload)
    })
  }else{
    access=<>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomeContent} />
        <Route exact path="/cities" component={Cities} />
        <Route path="/cities/:id" component={City} />
        <Route exact path="/admin" component={Admin}/>
        <Route path="/admin/cities" component={ACities}/>
        <Redirect to="/"/>
      </Switch>
    </>
  }
  return (
    <>
    <BrowserRouter>
      {access}
    <Footer />
    </BrowserRouter>
    </>
  )
}
const mapStateToProps = state =>{
  return {
    userlogged:state.authR.loggedUser
  }
}
const mapDispatchToProps={
  logingForLS:authActions.logingForLS
}
export default connect(mapStateToProps,mapDispatchToProps)(App)