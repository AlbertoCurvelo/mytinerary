import {connect} from 'react-redux'
import Loader from '../components/Loader'
import NotYet from '../components/NotYet'
import ViewItinerary from '../components/ViewItinerary'
import itineraryActions from '../redux/actions/itineraryActions'
const {useEffect, useState} = require("react")

const City = (props) =>{
  //Destructurado
  const {cities,itinerariesForThisCity,getAllItinerariesForId}=props
  const [city,setCity]=useState({})
  const [loaded,setLoaded]=useState(false)
  const {id}  = props.match.params

  useEffect(() => {
    window.scrollTo(0,0)
    loading()
  }, [id,getAllItinerariesForId,cities])
  async function loading(){
    await setCity(cities.filter(city => (city._id === id))[0])
    await getAllItinerariesForId(id)
    setLoaded(true)
  }

  if(Object.entries(cities).length)
 { return(
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
              if(i!==(itinerariesForThisCity.length-1))
              {return(
                <ViewItinerary key={itinerary._id} itinerary={itinerary}/>
              )}
              else{
                return (
                  <>
                    <ViewItinerary key={itinerary._id} itinerary={itinerary}/>
                    <NotYet msj={""} redirect={true}/>
                  </>
                )
              }
           })
           :!loaded
           ?<Loader/>
           :<NotYet msj={"Oops! We don't have itineraries yet."} redirect={true}/>
          }
      </div>
    </div>
    :<></>
    }
    </section>
  )}else{
    props.history.push('/cities')
    return (<></>)
  }
}
const mapStateToProps = state => {
  return {
    cities: state.cityR.cities,
    itinerariesForThisCity: state.itineraryR.itinerariesForThisCity
  } 
}
const mapDispatchToProps = {
  getAllItinerariesForId: itineraryActions.getAllItinerariesForId
}

export default connect(mapStateToProps, mapDispatchToProps)(City)