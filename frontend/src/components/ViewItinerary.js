import {connect} from 'react-redux'
import {Button, TextInput} from 'react-materialize';
import { useState } from 'react'
import Coment from './Coment'
import Loader from './Loader'
import {Alert} from 'rsuite'
import itinerariesActions from '../redux/actions/itineraryActions'

const ViewItinerary =({itinerary,userLogged,setLikeThisItinerary})=>{
  function ejecute(e){
    console.log("me ejecute desde :")
    console.log(e)
  }
  function siNo(e){
    console.log("Si no :")
    console.log(e)
  }
  function alertNotUser() {
    Alert.warning('You must be a logged in user to like.',3500)
  }
  //parametros recibidos del padre
  const {
    title,idUserAutor,
    arrayLikes,duration,valoration,hashTags,arrayComents,arrayActivities,_id
  } = itinerary
  //variables de estado del componente
  const [viewMoreOrLess,setViewMoreOrLess]=useState(false)
  const valorations=[1,2,3,4,5]
  return (
    <div className="itineraryView">
      <div className="itineraryDetail">
        <div className="userAutorView">
          <div className="userAutorImg">
            <div style={{backgroundImage:`url(${idUserAutor.urlPic})`}}></div>
          </div>
          <p>{idUserAutor.firtsName+" "+idUserAutor.lastName}</p>
        </div>
        <div className="contentItinerary">
          <h4>{title}</h4>
          <div className="likesAndOthers">
            <div className="likes">
              <i onClick={userLogged._id 
              ? ()=>{
                const respuesta=setLikeThisItinerary({"idUser":userLogged._id,"idItinerary":itinerary._id})
                !respuesta && Alert.error('Error while modifying in database.',3500)
              }:()=>alertNotUser()} 
              className="material-icons red-text favItinerary">{
              arrayLikes &&
              arrayLikes.map(idUser=>{
                if(idUser!==userLogged._id){
                return("favorite_border")
                }else{
                  return("favorite")
                }
              })}
              {arrayLikes.length===0 && "favorite_border"}
              </i><p className="white-text flow-text">{arrayLikes.length}</p>
            </div>
            <p><span>Duration: {duration}hs</span></p>
              <span>{
                valorations.map((value,i)=>{
                  if(i<valoration){
                    return (<i key={_id+value} className="material-icons green-text">monetization_on</i>)
                  }else{
                    return (<i key={_id+value}  className="material-icons grey-text">monetization_on</i>)
                  }
                })
              }
              </span>
            </div>
          <div className="hashtagsItinerary">
            {hashTags.map((hashTag,i)=>{
              return (
                <span key={'ht'+i}>{hashTag}</span>
              )
            }
            )}
            </div>
        </div>
      </div>
        {viewMoreOrLess
        ?<>
        {
        Object.entries(arrayActivities).length !== 0
          ?
          <div className="activities">
            {
              arrayActivities.map(({actImg,actTitle,_id})=>{
                return (
                  <div key={'act'+_id} style={{backgroundImage:`url(${actImg})`}} className="activity">
                    <p><span>{actTitle}</span></p>
                  </div>
                )
              })
            }
          </div>
          :<><Loader/></>
        }
        <div className="comments">
          {
          arrayComents.map((coment,i)=>{
            return (
              <Coment key={coment.userAutor+'d'+i} coment={coment}/>
            )
          })
          }
          <div className="inputComent">
            <div>
              <TextInput
                disabled
                id={"inputComent"+_id}
                value="Just for logged users!"
              />
              <i className="material-icons red-text">send</i>
            </div>
          </div>
        </div>
        </>
        :<></>
        }
        <Button
          node="button"
          onClick={()=>setViewMoreOrLess(!viewMoreOrLess)}
          waves="light"
          className="bMoreOrLess"
          id={"moreOrLess"+_id}
        >
          Read {viewMoreOrLess ? "less" : "more"}
        </Button>
    </div>
  )
}
const mapStateToProps = state =>{
  return {
    userLogged:state.authR.loggedUser
  }
}
const mapDispatchToProps={
  setLikeThisItinerary:itinerariesActions.setLikeThisItinerary
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewItinerary)