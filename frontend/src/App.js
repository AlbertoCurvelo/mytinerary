import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeContent from './components/HomeContent'
import Cities from './components/Cities'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/styles.css'
import 'materialize-css/dist/js/materialize'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomeContent} />
        <Route path="/cities" component={Cities} />
        <Redirect to="/"/>
      </Switch>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;