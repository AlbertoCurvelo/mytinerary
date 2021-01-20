import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {TextInput} from 'react-materialize'
const direccionHost='http://localhost:4000'

const Cities = () =>{
  const [cities,setCities]=useState([])
  const [filterCities,setFilterCities]=useState([])

  useEffect(() => {
    fetch(direccionHost+'/cities')
    .then(res=>res.json())
    .then(data=>{
      // Guardo las cities en mi array para usar en el filtro y tambien en el filtrado
      // Para que al ingresar por primera vez se muestren las ciudades, 
      // ya que mapeo siempre el filtrado
      setCities(data.respuesta)
      setFilterCities(data.respuesta)
    })
  }, [])

  /*Por cada cambio en el input, tomo el valor del input, aplico un filter 
  por nombre de la ciudad y retorno a guardarla en una variable de estado, 
  por lo que renderiza */
  const filter = e =>{
    const textFindCities=e.target.value
    setFilterCities(cities.filter(({titleCity})=>{
      return titleCity.toLowerCase().indexOf(textFindCities.toLowerCase().trim()) === 0
    }))
  }
  
  return(
    <section className="cityPage"> 
      <h2>Cities</h2>
      <div className="filterCities">
        <TextInput  
          icon='search'
          id="inputFindCities"
          label="Type here for search"
          onChange={filter}
        /> 
      </div>  
      <div className="viewCities">
        {
        filterCities.map(({_id,directionImage,titleCity})=>{
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