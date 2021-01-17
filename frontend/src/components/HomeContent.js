import CarouselCities from './Carousel'
import {NavLink} from 'react-router-dom'
import BaseLogo from './BaseLogo'

const HomeContent=() =>{

  return (
    <section>
      <div className="bannerPrincipal">
        <BaseLogo/>
        <div className="slogan">
          <p>Find your perfect trip, designed by insiders who know and love their cities</p>
        </div>
      </div>
      <div className="call">
        <p>If you look for more Itineraries | Click Here!</p>
        <div></div>
        <NavLink to="/cities">
          <i className="material-icons">call_split</i>
        </NavLink>
      </div>
      <p className="titleCarousel">Popular MYtineraries</p>
      <CarouselCities/>
      </section>
  )
}
export default HomeContent
