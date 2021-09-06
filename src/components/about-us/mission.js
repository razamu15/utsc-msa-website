import * as React from "react"

const Mission = (props) => {
  return (
    <div class="tile is-6 is-parent" >
      <div class="tile is-child format-box" >
      <h1 class="title is-2 hero-heading-border">{props.data.heading}</h1>
        <p>{props.data.blurb1}</p>

        <p>{props.data.blurb2}</p>
      </div>
    </div>
  )
}

export default Mission;
