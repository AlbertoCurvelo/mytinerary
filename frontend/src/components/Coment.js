const Coment = ({idItinerary,comment,userLogged,delComment,userEditComment,setUserEditComment,commentUser,setCommentUser}) =>{
  const {idUser,coment} = comment
  const idComment = comment._id
  function editC(){
    document.getElementById('inputComent').value=coment
    setUserEditComment(true)
    setCommentUser({...commentUser,idComment:idComment})
  }
  return (
    <div className="boxComent">
      {idUser &&
      <div className="coment">
      <div className="imgUserComent" style={{backgroundImage:`url(${idUser.urlPic})`}}></div>
        <div className="burbleComent">
          <p><span>{idUser.firtsName+" "+idUser.lastName}</span> says:</p>
          <span>{coment}</span>
        </div>
      </div>
      }
      
      {userLogged && idUser &&
        userLogged._id===idUser._id &&
        <div className="editUserComment">
          <i onClick={()=>editC()} className="material-icons buttonUserEdit">edit</i>
          <i onClick={()=>delComment({idItinerary,idComment})} className="material-icons buttonUserDelete">delete</i>
        </div>
      }
    </div>
  )
}
export default Coment