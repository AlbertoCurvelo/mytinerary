import { Link } from "react-router-dom"
import {Tabs,Tab,TextInput,Textarea,Button} from 'react-materialize'
import axios from 'axios'
import { useState } from "react"
import CargarDatosCities from "./components/CargarDatosCities"
import Alert from './components/Alert'

const Cities = () =>{
  const [newCity,setNewCity]=useState({})
  const [newAlert,setNewAlert]=useState({})
  const options={
    duration: 300,
    onShow: null,
    responsiveThreshold: Infinity,
    swipeable: false
  }
  const readInput=e=>{
    const campo=e.target.name.trim()
    const valor=e.target.value.trim()
    setNewCity({
      ...newCity,
      [campo]:valor
    })
  }
  const bGuardarNewCity = async (e) =>{
    e.preventDefault();
    const res= await axios.post('http://localhost:4000/api/admin/cities/newCity',newCity)
    if(res.data.success){
      <Alert setNewAlert={setNewAlert} success={res.data.success}/>
      e.target.parentElement.querySelector('#titleNewCity').value="" 
      e.target.parentElement.querySelector('#urlNewCity').value="" 
      e.target.parentElement.querySelector('#descriptionNewCity').value=""
    }else{
      {console.log(new)}
      <Alert setNewAlert={setNewAlert} success={res.data.success} error={res.data.error}/>
    }
  } 
  return(
    <section className="aCities">
      <h3>Opciones Cities</h3>
      <Tabs className="tab-demo z-depth-1">
        <Tab
          active
          options={options}
          title="Agregar"
          className="contentTab"
        >
        <div className="contentTab">
          <TextInput
            name="titleCity"
            id="titleNewCity"
            label="Titulo"
            onChange={readInput}
          />
          <TextInput
            name="directionImage"
            id="urlNewCity"
            label="Url de la imagen"
            onChange={readInput}
          />
          <Textarea
            name="descriptionCity"
            id="descriptionNewCity"
            label="Descripcion"
            l={12}
            m={12}
            s={12}
            xl={12}
            onChange={readInput}
          />
          <Button
            node="button"
            waves="light"
            onClick={bGuardarNewCity}
          >
            Guardar
          </Button>
          {
            Object.entries(newAlert).length !== 0
            ?
            <>
              <div className="resAlert">
              <div className={`materialert ${newAlert.typeAlert}`}>
                <div className="material-icons">{newAlert.typeIcon}</div>
                {newAlert.msj}
              </div>
            </div>
            {
              setInterval(() => {
                setNewAlert({})
              }, 3500)
            }
            </>
            :<></>
          }
          </div>
        </Tab>
        <Tab
          active
          options={options}
          title="Eliminar / Editar"
        >
          <CargarDatosCities/>
        </Tab>
      </Tabs>
      <div className="backHome">
            <Link to="/admin">
              <i className="material-icons">undo</i>
            </Link>
      </div>
    </section>
  )
}
export default Cities