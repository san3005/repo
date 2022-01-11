import React from 'react'
import Draggable from 'react-draggable';


function Card(props) {
    
    return (
        <Draggable
        axis={props.axis}>

        <div style={{overflow: props.overflow}}>
             <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
    <p className="card-text">{props.content}</p>
    
  
    
  </div>
</div>
        </div>
        </Draggable>

    )
}

export default Card
