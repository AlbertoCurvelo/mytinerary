import {Link} from 'react-router-dom'

const AllCities = ({_id, directionImage , titleCity}) => {
  console.log(_id)
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
export default AllCities