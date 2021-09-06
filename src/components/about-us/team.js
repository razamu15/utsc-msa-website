import * as React from "react"

const Team = (props) => {
  return (
    <section class="hero">
      <div class="hero-body">
        <div class="columns is-multiline is-mobile is-centered">
          {props.data.map(teamMember => {
            return (
              <div class="column columns is-4  member-list-item">
                <figure class="image is-64x64 column is-4">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
                <div class="member-info column">
                  <h1 class="title is-5">{teamMember.name}</h1>
                  <h1 class="title is-6 ">{teamMember.title}</h1>
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
