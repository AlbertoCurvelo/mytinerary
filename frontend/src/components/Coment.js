const Coment = (props) =>{
  const {userName,userComentImg,coment} = props.coment
  return (
    <div className="coment">
      <div className="imgUserComent" style={{backgroundImage:`url(${userComentImg})`}}></div>
      <div className="burbleComent">
        <p><span>{userName}</span> says:</p>
        <span>{coment}</span>
      </div>
    </div>
  )
}
export default Coment