import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const direccionHost='http://localhost:4000'

const Cities = () =>{
  const [cities,setCities]=useState([])
  useEffect(() => {
    fetch(direccionHost+'/cities')
    .then(res=>res.json())
    .then(data=>setCities(data.respuesta))
  }, [])
  return(
    <section className="cityPage">   
      <div className="viewCities">
        {
        cities.map(({_id,directionImage,titleCity})=>{
          return(
            <Link key={_id} to={`/cities/${_id}`}>
              <div style={{
                backgroundImage:`url("${directionImage}")`
              }} className="cityView">
                <div className="cityName">
                  <p className="titleCity">{titleCity}</p>
                </div>
              </div>
            </Link>
          )
        })
        }
      </div>
    </section>
  )
}
export default Cities 