import {Button} from 'react-materialize';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Coment from './Coment'

const ViewItinerary =(props)=>{
  const {
    idCity,title,userAutor,userImgAutor,
    likes,duration,valoration,hashTags,arrayComents
  } = props.itinerary
  const [viewMoreOrLess,setViewMoreOrLess]=useState(false)
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
        <div className="activities">

        </div>
        <div className="comments">
          {
          arrayComents.map(coment=>{
            console.log(coment)
            return (
              <Coment coment={coment}/>
            )
          })
          }
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