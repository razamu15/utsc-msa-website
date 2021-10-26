import * as React from "react"

const Membership = (props) => {
  return (
    <div class="tile is-4 is-parent">
      <div class="tile is-child format-box">
        <h1 class="title is-3 ">{props.data.heading}</h1>
        <p>{props.data.blurb1}</p>

        <p>{props.data.blurb2}</p>
        
        <span className="button is-link is-msa-blue card-btn" data-target="modal-image">Register &rarr;</span>
      </div>
    </div>
  )
}

export default Membership;
