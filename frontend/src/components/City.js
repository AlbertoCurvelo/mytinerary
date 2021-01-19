const { useState, useEffect } = require("react")
const direccionHost='http://localhost:4000'

const City = (props) =>{
  const [city,setCity]=useState({})

  useEffect(() => {
    const id= props.match.params.id
    console.log(direccionHost+'/cities/'+id)
    fetch(direccionHost+'/cities/'+id)
    .then(res => res.json())
    .then(data => setCity(data.respuesta))
  }, [])

  return(
    <section className="cityPage">
      <div style={{
        backgroundImage:`url("${city.directionImage}")`
      }} className="cityView city">
        <div className="cityName">
          <p className="titleCity">{city.titleCity}</p>
        </div>
      </div>
      <div className="seccionInfoCity">
        <h2>Content Itineraries from city - {city.titleCity}</h2>
      </div>
    </section>
  )
}
export default City