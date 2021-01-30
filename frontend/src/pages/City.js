import {connect} from 'react-redux'
import Loader from '../components/Loader'
import NotYet from '../components/NotYet'
import ViewItinerary from '../components/ViewItinerary'
import itineraryActions from '../redux/actions/itineraryActions'
const {useEffect, useState} = require("react")

const City = (props) =>{
  const {cities,itinerariesForThisCity,getAllItinerariesOrActivitiesForId}=props
  const [city,setCity]=useState({})
  const {id}  = props.match.params

  useEffect(() => {
    window.scrollTo(0,0)
    setCity(cities.filter(city => (city._id === id))[0])
    getAllItinerariesOrActivitiesForId(id,'itineraries')
  }, [id,getAllItinerariesOrActivitiesForId,cities])

  return(
    <section className="cityPage">
    {
    Object.entries(city).length !== 0
    ?
    <div>
      <div className="allCity">
        <div style={{
            backgroundImage:`url("${city.directionImage}")`
          }} className="cityView city">
            <div className="cityName">
              <p className="titleCity">{city.titleCity}</p>
            </div>
        </div>
        <div className="descriptionCity">
          <p>{city.descriptionCity}</p>
        </div>
      </div>
      <div className="seccionInfoCity">
        <h2>Itineraries from city - {city.titleCity}</h2>
        {
           Object.entries(itinerariesForThisCity).length
           ?itinerariesForThisCity.map((itinerary,i)=>{
            return(
              <ViewItinerary key={itinerary._id} itinerary={itinerary}/>
              )
           })
           :<NotYet msj={"Oops! We don't have itineraries yet."} redirect={true}/>
          }
      </div>
    </div>
    :<Loader/>
    }
    </section>
  )
}
const mapStateToProps = state => {
  return {
    cities: state.cityR.cities,
    itinerariesForThisCity: state.itineraryR.itinerariesForThisCity
  } 
}
const mapDispatchToProps = {
  getAllItinerariesOrActivitiesForId: itineraryActions.getAllItinerariesOrActivitiesForId
}

export default connect(mapStateToProps, mapDispatchToProps)(City)