import {NavLink} from 'react-router-dom'

const Footer = () =>{
  return(
    <footer>
      <div className="footerLogo"></div>
      <div className="footerLinks">
        <p>Menu</p>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/cities">Cities</NavLink>
      </div>
    </footer>
  )
}
export default Footer