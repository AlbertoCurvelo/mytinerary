import {NavLink} from 'react-router-dom'

const Cities =()=>{
  //Cuando iniciaba el Slider, debido al setInterval para iniciarlo, quedaba esta variable en memoria, por eso la coloque en false
  //Y le di un uso para que no haga el warning 

  var instance = false
  return(
    !instance
    ?<section>   
      <div className="cityPage">
        <h1>Oops .. sorry, this model is under construction</h1>
        <div className="backHome">
          <NavLink to="/">
            <i className="material-icons">undo</i>
          </NavLink>
        </div>
      </div> 
    </section>
    :<></>
  )
}
export default Cities