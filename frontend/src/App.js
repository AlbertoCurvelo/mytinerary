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

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomeContent} />
        <Route exact path="/cities" component={Cities} />
        <Route path="/cities/:id" component={City} />
        <Route exact path="/admin" component={Admin}/>
        <Route path="/admin/cities" component={ACities}/>
        <Redirect to="/"/>
      </Switch>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;