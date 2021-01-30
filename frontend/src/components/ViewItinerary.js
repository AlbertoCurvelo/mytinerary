import {connect} from 'react-redux'
import {Button, TextInput} from 'react-materialize';
import { useState, useEffect } from 'react'
import Coment from './Coment'
import itineraryActions from '../redux/actions/itineraryActions'
import Loader from './Loader'

const ViewItinerary =({itinerary,getAllItinerariesOrActivitiesForId,activitiesForThisItinerary})=>{
  //parametros recibidos del padre
  const {
    title,userAutor,userImgAutor,
    likes,duration,valoration,hashTags,arrayComents,_id
  } = itinerary
  //variables d eestado del componente
  const [viewMoreOrLess,setViewMoreOrLess]=useState(false)
  const valorations=[1,2,3,4,5]
  const idItineraryPadre=_id
  const activities=[{}]
  
  useEffect(() => {
    getAllItinerariesOrActivitiesForId(idItineraryPadre,'activities')
  }, [viewMoreOrLess])

  return (
    <div className="itineraryView">
      <div className="itineraryDetail">
        <div className="userAutorView">
          <div className="userAutorImg">
            <div style={{backgroundImage:`url(${userImgAutor})`}}></div>
          </div>
          <p>{userAutor}</p>
        </div>
        <div className="contentItinerary">
          <h4>{title}</h4>
          <div className="likesAndOthers">
            <p className="white-text flow-text"><i className="material-icons red-text">favorite_border</i>{likes}</p>
            <p><span>Duration: {duration}hs</span></p>
              <span>{
                valorations.map((value,i)=>{
                  if(i<valoration){
                    return (<i className="material-icons green-text">monetization_on</i>)
                  }else{
                    return (<i className="material-icons grey-text">monetization_on</i>)
                  }
                })
              }
              </span>
            </div>
          <div className="hashtagsItinerary">
            {hashTags.map(hashTag=>{
              return (
                <span key={hashTag._id}>{hashTag}</span>
              )
            }
            )}
            </div>
        </div>
      </div>
      {/*
      favorite_border   
      monetization_on
      */}
      
        {viewMoreOrLess
        ?<>
        {
        Object.entries(activitiesForThisItinerary).length !== 0
          ?<div className="activities">
            {
            activitiesForThisItinerary.map(({actImg,actTitle,_id,idItinerary})=>{
              if(idItineraryPadre===idItinerary)
              {return (
                <div key={'act'+_id} style={{backgroundImage:`url(${actImg})`}} className="activity">
                  <p><span>{actTitle}</span></p>
                </div>
              )}else{
                return <Loader/>
              }
            })
          }
          </div>
          :<></>
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
        >
          Read {viewMoreOrLess ? "less" : "more"}
        </Button>
    </div>
  )
}
const mapStateToProps= state =>{
  return {
    activitiesForThisItinerary:state.itineraryR.activitiesForThisItinerary
  }
}
const mapDispatchToProps = {
  getAllItinerariesOrActivitiesForId:itineraryActions.getAllItinerariesOrActivitiesForId
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewItinerary)