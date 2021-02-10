const Coment = (props) =>{
  const {idUser,coment} = props.coment
  console.log(idUser)
  return (
    <div className="coment">
      <div className="imgUserComent" style={{backgroundImage:`url(${idUser.urlPic})`}}></div>
      <div className="burbleComent">
        <p><span>{idUser.firtsName+" "+idUser.lastName}</span> says:</p>
        <span>{coment}</span>
      </div>
    </div>
  )
}
export default Coment