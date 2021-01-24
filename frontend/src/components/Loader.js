import {Col,Preloader} from 'react-materialize'

const Loader = () =>{
  return(
  <Col s={4}>
    <Preloader
      active
      color="blue"
      flashing
    />
  </Col>
  )
}
export default Loader