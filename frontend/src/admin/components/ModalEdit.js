import { useEffect, useState } from 'react'
import { Modal, TextInput , Textarea , Button , Icon} from 'react-materialize'
import axios from 'axios'
import Alert from './Alert'

const ModalEdit = (props) =>{
  const [newCity,setNewCity]=useState({})
  const [newAlert,setNewAlert]=useState({})
  const {_id,titleCity,directionImage,descriptionCity}=props.city
  const editCity=async (e) =>{
    e.preventDefault();
    const res= await axios.put(`https://curvelo-mytinerary.herokuapp.com/api/admin/cities/${e.target.value}`, {newCity:newCity})
    console.log(res.data)
    if(res.data.success){
      <Alert setNewAlert={setNewAlert} success={res.data.success}/>
      /*setRefresh(!refresh)*/
    }else{
      <Alert setNewAlert={setNewAlert} success={res.data.success} error={res.data.error}/>
    }
  }
  useEffect(() => {
    setNewCity({
      "titleCity":document.querySelector(`#title${_id}`).value,
      "directionImage":document.querySelector(`#direction${_id}`).value,
      "descriptionCity":document.querySelector(`#description${_id}`).value
    })
  }, [_id])
  
  const readInput=e=>{
    const campo=e.target.name.trim()
    const valor=e.target.value.trim()
    setNewCity({
      ...newCity,
      [campo]:valor
    })
  }
  return (
    <Modal
      actions={[
        <>
        <Button flat value={`${_id}`} modal="confirm" className="modalEdit" onClick={editCity} node="button" waves="green">Modificar</Button>
        <Button flat modal="close" className="modalClose" node="button" waves="green">Cerrar</Button>
        </>
      ]}
      className="modalEditCity"
      bottomSheet
      fixedFooter={false}
      header={"Edit City - "+titleCity}
      id="Modal-0"
      open={false}
      options={{
        dismissible: true,
        endingTop: '20%',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '0%'
      }}
      root={document.querySelector("#root")}
      trigger={
      <Button
        value={`${_id}`}
        node="button"
        className="amber accent-4 buttonE"
        waves="light"
      >
        <Icon>
          edit
        </Icon>
      </Button>
      }
      >
        <div className="modalEdit">
          <TextInput
            name="titleCity"
            id={"title"+_id}
            label="Titulo"
            defaultValue={titleCity}
            onChange={readInput}
          />
          <TextInput
            name="directionImage"
            id={"direction"+_id}
            label="Url de la imagen"
            defaultValue={directionImage}
            onChange={readInput}
          />
          <Textarea
            name="descriptionCity"
            id={"description"+_id}
            label="Descripcion"
            defaultValue={descriptionCity}
            l={12}
            m={12}
            s={12}
            xl={12}
            onChange={readInput}
          />
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
    </Modal>
  )
}
export default ModalEdit
