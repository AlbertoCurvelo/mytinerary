import {Button} from "react-materialize"
import {Link} from "react-router-dom"

const Admin = () =>{
  return (
    <section className="adminPage">
      <h3>Opciones de administracion</h3>
      <div className="opciones">
        <Link to="/admin/cities">
          <Button
            node="button"
            style={{
              marginRight: '5px'
            }}
            waves="light"
          >
            Admin Cities
          </Button>
        </Link>
      </div>
    </section>    
  )
}
export default Admin