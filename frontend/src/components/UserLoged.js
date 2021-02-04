const UserLoged = () =>{
  const imgUser=require(`../assets/img/logoUser.png`).default
  /*falta recibir si alguien esta logueado y poner sus datos*/ 
  return (
    <>
      <div style={{
        backgroundImage:`url(${imgUser})`
      }} className="userImg">
      </div>
      <div className="userLogedData">
        <p>Name:</p>
        <p>Email:</p>
      </div>
    </>
  )
}
export default UserLoged