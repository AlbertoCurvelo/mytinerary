const Slide = ({arrayCities}) =>{ 
  return(
    <>
      {
        arrayCities.map((city)=>{
          return(
            <div key={city.title} style={{
              backgroundImage:`url("${city.direction}")`
            }} className="city">
              <div className="title">
                <p>{city.title}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
export default Slide