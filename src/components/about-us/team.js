import * as React from "react"

const Team = (props) => {
  return (
    <section class="hero">
      <div class="hero-body">
        <div class="team-grid">
          {props.data.map(teamMember => {
            return (
              <div class="member-list-item">
                <figure class="image is-64x64">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
                <div class="member-info">
                  <h1 class="name">{teamMember.name}</h1>
                  <h1 class="position">{teamMember.title}</h1>
                  {/* <p>some quote text thingy? and a whole bunch of text for those people thhat are way too talkitive and think the whole world revolves arpund them</p> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

  )
}

export default Team;
