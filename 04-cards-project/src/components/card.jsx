import React from 'react'
import { Bookmark } from "lucide-react"
const card = (props) => {

    console.log(props.company);
  return (
    <div>
          <div className="card">
    

  {/* TOP */}
  <div className="top">
    <img
      src={props.brandLogo}
      alt={props.company}
    />

    <button className="save-btn">
      save <Bookmark size={12} />
    </button>
  </div>

  {/* CENTER */}
  <div className="center">
    <h3>
      {props.company} <span>{props.datePosted}</span>
    </h3>

    <h2>{props.post}</h2>

    <div className="tag">
    <h4>{props.tag1}</h4>
      <h4>{props.tag2}</h4>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="bottom">
    <div>
    <h3>{props.pay}</h3>
      <p>{props.location}</p>
    </div>

    <button className="apply-btn">Apply now</button>
  </div>

</div>
    </div>
  )
}

export default card ;
