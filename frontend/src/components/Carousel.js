import {Carousel} from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css'
import data from './data/dataCarousel.json'
import Slide from './Slide'
import M from 'materialize-css/dist/js/materialize'
import React, { useEffect } from 'react'

const CarouselCities=() =>{
  useEffect(() => {
    var elems=document.querySelector('.carouselCitys')
    var instance = M.Carousel.getInstance(elems);
    /*Para darle movilidad al slide, estaba buscando otra alternativa mejor, 
    pero esta fue la que encontre mas funcional con materialize*/
    setInterval(function() {
      instance.next()
    }, 5000); 
    /*Si sabes de alguna mejor, me avisas.*/
  }, [])
  return(
  <Carousel
    carouselId="CarouselCitys"
    className="white-text botton carouselCitys"
    options={{
      fullWidth: true,
      duration:800
    }}
  >
  {
    data.map((arrayCities,i)=>{
        return(
          //Solo use el indice para colocar la key distinta
          <div key={i} className="slide">
            <Slide arrayCities={arrayCities}/>
          </div>
        )
    })    
  }
  </Carousel>
  )
}
export default CarouselCities