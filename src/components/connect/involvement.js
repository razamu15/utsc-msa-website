import * as React from "react"

const Involvement = (props) => {

  return (
    <section class="hero is-medium" id="involvement">
      <div class="hero-body" style={{ padding: "3rem 5rem 0rem 5rem" }}>
        <div class="tile is-ancestor" style={{ flexWrap: "wrap" }}>
          <div class="tile is-12 is-parent">
            <div class="tile is-child format-box" style={{ padding: "0px" }}>
              <h1 class="title is-2 hero-heading-border">{props.data.heading}</h1>
              <p>{props.data.blurb}</p>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </section>
  )
}

export default Involvement;
