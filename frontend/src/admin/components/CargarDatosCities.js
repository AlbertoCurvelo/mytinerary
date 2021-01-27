import { useEffect,useState } from 'react'
import {Table,Button,Icon} from 'react-materialize'
import axios from 'axios'
import ModalEdit from './ModalEdit'
import Alert from './Alert'
const direccionHost='http://localhost:4000/api'

const CargarDatosCities = () =>{
  const [refresh,setRefresh]=useState(false)
  const [cities,setCities]=useState([])
  const [newAlert,setNewAlert]=useState({})

  useEffect(() => {
    fetch(direccionHost+'/cities')
    .then(res=>res.json())
    .then(data=>{
      setCities(data.respuesta)
    })
  }, [refresh])

  const eliminarCity=async (e) =>{
    e.preventDefault();
    const res= await axios.delete(`http://localhost:4000/api/admin/cities/${e.target.value}`)
    if(res.data.success){
      <Alert setNewAlert={setNewAlert} success={res.data.success}/>
      setRefresh(!refresh)
    }else{
      <Alert setNewAlert={setNewAlert} success={res.data.success} error={res.data.error}/>
    }
  }
  return (
  <div>
    <Table>
      <thead className="orange-text darken-3">
        <tr>
          <th data-field="id">
            Id
          </th>
          <th data-field="nombre">
            Nombre
          </th>
          <th data-field="url">
            Url
          </th>
          <th>
            Accion
          </th>
        </tr>
      </thead>
      <tbody>
        {
          cities.map((city)=>{
            const {_id,titleCity,directionImage}=city
            return (
            <tr key={_id}>
              <td className="idColor">
                {_id}
              </td>
              <td>
                {titleCity}
              </td>
              <td>
                {directionImage}
              </td>
              <td className="iconosMod">
                <ModalEdit key={_id} city={city}/>     
                <Button
                  value={_id}
                  node="button"
                  className="red darken-4 buttonE"
                  waves="light"
                  onClick={eliminarCity}
                >
                  <Icon>
                    delete
                  </Icon>
                </Button>
              </td>
            </tr>
            )
          }) 
        }
      </tbody>
    </Table>
    {
      Object.entries(newAlert).length !== 0
      ?<div className="resAlert">
        <div className={`materialert ${newAlert.typeAlert}`}>
          <div className="material-icons">{newAlert.typeIcon}</div>
          {newAlert.msj}
        </div>
      </div>
      :<></>
    }
  </div>
  )
}
export default CargarDatosCities