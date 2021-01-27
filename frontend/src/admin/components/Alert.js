const Alert = ({setNewAlert,success,error=0}) =>{
  return (
    success
    ?setNewAlert({
        typeAlert:'success',
        typeIcon:'check',
        msj:'Se edito la city con exito'
      })
      
    :setNewAlert({
        typeAlert:'error',
        typeIcon:'error',
        msj:'Error: '+error
      })
    
  )
}
export default Alert