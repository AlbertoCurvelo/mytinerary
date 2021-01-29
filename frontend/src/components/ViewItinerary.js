import {Button, TextInput} from 'react-materialize';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Coment from './Coment'
const direccionHost='http://localhost:4000/api' 
const ViewItinerary =({itinerary})=>{
  const {
    idCity,title,userAutor,userImgAutor,
    likes,duration,valoration,hashTags,arrayComents,_id
  } = itinerary
  const [viewMoreOrLess,setViewMoreOrLess]=useState(false)
  const [activities,setActivities] = useState([])
  useEffect(() => {
    window.scrollTo(0,0)
    const id= _id
    fetch(direccionHost+'/itinerary/activities/'+id)
    .then(res => res.json())
    .then(data => setActivities(data.respuesta))
  }, [])
  const valorations=[1,2,3,4,5]
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
            <p><Link className="white-text flow-text"><i className="material-icons red-text">favorite_border</i>{likes}</Link></p>
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
                <span>{hashTag}</span>
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
          Object.entries(activities).length !== 0
          ?<div className="activities">
            {
            activities.map(({actImg,actTitle})=>{
              return (
                <div style={{backgroundImage:`url(${actImg})`}} className="activity">
                  <p><span>{actTitle}</span></p>
                </div>
              )
            })
            }
          </div>
          :<></>
        }
        
        <div className="comments">
          {
          arrayComents.map(coment=>{
            console.log(coment)
            return (
              <Coment coment={coment}/>
            )
          })
          }
          <div className="inputComent">
            <div>
              <TextInput
                disabled
                id="inputComent"
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
export default ViewItinerary