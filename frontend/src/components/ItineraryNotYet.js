import {Link} from 'react-router-dom'

const ItineraryNotYet = () =>{
  return (
    <div className="ItineraryNotYet">
      <div className="imgItineraryNotYet"></div>
      <div className="viewInfoUser">
        <p>Oops! We don't have itineraries yet.</p>
        <p>Looking for other city?</p>
        <Link to="/cities">
          <span><i className="material-icons">undo</i> Back to cities</span>
        </Link>
      </div>
    </div>
  )
}
export default ItineraryNotYet