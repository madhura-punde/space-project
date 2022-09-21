import React from 'react'

function CardSection(props) {

  const {mission_name, rocket:{rocket_name},details, launch_site:{site_name}} = props.Data

  console.log(props.Data)


  return (
     <div className="card mb-3" style={{"width": "30rem"}}>
        <div className="card-body">
         <h5 className="card-title">Mission Name:{mission_name}</h5>
          <h6>Rocket Name:{rocket_name}</h6>
          <div>Launch Site:{site_name}</div>
     
        <p className="card-text">Description: {details? details : 'Details not available'}</p>
      
        </div>
    </div>
  )
}

export default CardSection