import {Link} from 'react-router-dom'

const NotYet = ({msj,redirect=false}) =>{
  return (
    <div className="ItineraryNotYet">
      <div className="imgItineraryNotYet"></div>
      <div className="viewInfoUser">
        <p>{msj}</p>
      {
        redirect
        ?
        <>
          <p>Looking for other city?</p>
          <Link to="/cities">
            <span><i className="material-icons">undo</i> Back to cities</span>
          </Link>
        </>
        :<></>
      }
      </div>
    </div>
  )
}
export default NotYet