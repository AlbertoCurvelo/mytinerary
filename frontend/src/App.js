import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeContent from './pages/HomeContent'
import Cities from './pages/Cities'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/styles.css'
import 'materialize-css/dist/js/materialize'
import City from './components/City'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomeContent} />
        <Route exact path="/cities" component={Cities} />
        <Route path="/cities/:id" component={City} />
        <Redirect to="/"/>
      </Switch>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;