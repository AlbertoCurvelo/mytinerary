import { useEffect, useState } from 'react'
import {TextInput} from 'react-materialize'
import NotYet from '../components/NotYet'
import Loader from '../components/Loader'
import ViewCity from '../components/ViewCity'

const direccionHost='http://localhost:4000/api'

const Cities = () =>{
  const [cities,setCities]=useState([])
  const [filterCities,setFilterCities]=useState([])
  const [textFindUse, setTextFindUse]=useState(false)

  useEffect(() => {
    window.scrollTo(0,0)
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
    setTextFindUse(true)
    //Separa las tildes de los caracteres acentuados los elimina y los remplaza con ''
    const textFindCities=e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    setFilterCities(cities.filter(({titleCity})=>{
      return titleCity.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(textFindCities.toLowerCase().trim()) === 0
    }))
  }
  
  
  return(
    <section className="cityPage"> 
      <h2>Cities</h2>
      <div className="filterCities">
        <TextInput  
          icon='search'
          id="inputFindCities"
          className="inputSearch"
          label="Type here for search"
          onChange={filter}
        /> 
      </div>  
      <div className="viewCities">
        {
        Object.entries(filterCities).length !== 0
        ?
          filterCities.map((city)=>{
          return(
            <ViewCity key={city._id} city={city}/>
          )
        })
        :
          textFindUse===false
          ? <Loader/>
          : <NotYet msj={"Does not match any results, try another search"} redirect={false}/>
        }
      </div>
    </section>
  )
}
export default Cities 