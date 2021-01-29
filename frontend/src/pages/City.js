import Loader from '../components/Loader'
import NotYet from '../components/NotYet'
import ViewItinerary from '../components/ViewItinerary'
const { useState, useEffect } = require("react")
const direccionHost='http://localhost:4000/api'

const City = (props) =>{
  const [city,setCity]=useState({})
  const [itinerariesCity,setItinerariesCity]=useState([])

  useEffect(() => {
    window.scrollTo(0,0)
    const id= props.match.params.id
    fetch(direccionHost+'/cities/'+id)
    .then(res => res.json())
    .then(data => setCity(data.respuesta))
    //opteniendo el itinerario/s
    fetch(direccionHost+'/itineraries/city/'+id)
    .then(res => res.json())
    .then(data => setItinerariesCity(data.respuesta))
  }, [props.match.params.id])

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
           Object.entries(itinerariesCity).length
           ?itinerariesCity.map(itinerary=>{
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
export default City