import * as React from "react"

const Constitution = (props) => {
  return (
    <div class="tile is-6 is-parent" id="constitution">
      <div class="tile is-child format-box" >
        <h1 class="title is-2 hero-heading-border">{props.data.heading}</h1>
        <p>{props.data.blurb1}</p>

        <p>{props.data.blurb2}</p>

        <span class="button is-link card-btn" data-target="modal-image">View Full Constitution
          &rarr;</span>
      </div>
    </div>
  )
}

export default Constitution;
