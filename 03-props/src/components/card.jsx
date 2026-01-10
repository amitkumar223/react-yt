import React from 'react'


const Card = (props) => {

    console.log();
  return (
    <div>
        <div className="card">
            <img src={props.img} alt="Profile Picture" /> 
            <h2>{props.user},{props.age}</h2>
            <p>Card content goes here.</p>
            <button>View profile</button>
        </div>
    </div>
    
  )
}

export default Card
