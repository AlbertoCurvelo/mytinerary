import {Link} from 'react-router-dom'
const ViewCity = (props) =>{
  const {_id,directionImage,titleCity} = props.city
  return (
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
}
export default ViewCity
            