import {connect} from 'react-redux'
import {useEffect} from 'react'
import {TextInput} from 'react-materialize'
import NotYet from '../components/NotYet'
import Loader from '../components/Loader'
import ViewCity from '../components/ViewCity'
import cityActions from '../redux/actions/cityActions'

const Cities = ({getAllCities,filter,textFindUse,filterCities}) =>{
  useEffect(() => {
    window.scrollTo(0,0)
    getAllCities()
  }, [getAllCities])
  
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
const mapStateToProps = state =>{
  return {
    cities: state.cityR.cities,
    filterCities: state.cityR.filterCities,
    textFindUse: state.cityR.textFindUse
  }
}
const mapDispatchToProps = {
  getAllCities: cityActions.getAllCities,
  filter: cityActions.filter
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities) 