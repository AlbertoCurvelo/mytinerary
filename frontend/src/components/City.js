import ItineraryNotYet from './ItineraryNotYet'
const { useState, useEffect } = require("react")
const direccionHost='http://localhost:4000'

const City = (props) =>{
  const [city,setCity]=useState({})

  useEffect(() => {
    window.scrollTo(0,0)
    const id= props.match.params.id
    fetch(direccionHost+'/cities/'+id)
    .then(res => res.json())
    .then(data => setCity(data.respuesta))
  }, [props.match.params.id])

  return(
    <section className="cityPage">
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
        <ItineraryNotYet/>
      </div>
    </section>
  )
}
export default City