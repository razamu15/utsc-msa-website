import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// markup
const Detail = (props) => {
  return (
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">{props.label}</label>
      </div>
      <div class="field-body">

        <p class="control">
          <input class="input is-static" type="text" value={props.value} readOnly />
        </p>

      </div>
    </div>
  )
}

const EventPage = (props) => {
  console.log(props)
  const event = props.data.contentfulEvent
  const back = 
  <a class="button is-outlined is-inverted">
    <span class="icon">
      <FontAwesomeIcon icon="arrow-left" />
    </span>
    <span>All Events</span>
  </a>

  return (
    <Layout heading="Events" subHeading={back} socials={false} size="halfheight">
      <section class="hero is-medium" >
        <div class="hero-body" style={{ padding: "4rem 5rem 4rem 5rem" }}>
          <div class="tile is-ancestor" style={{ flexWrap: "wrap" }}>
            <div class="tile is-3 is-parent" >
              <div class="tile is-child format-box" >
                <h1 class="title is-2">{event.title}</h1>
              </div>
            </div>
            <div id="mission-img" class="tile is-9 is-parent" style={{ justifyContent: "center" }}>
              <div class="img-tile tile is-child">
                <img
                  src={event.poster.file.url} />
              </div>
            </div>
            <div class="tile is-4 is-parent" >
              <div class="tile is-child format-box" style={{ justifyContent: "flex-start" }} >
                <h1 class="title is-3 hero-heading-border">Details</h1>
                <Detail label="Date" value={event.day} />
                <Detail label="Time" value={event.time} />
                <Detail label="Registration Required" value={event.registration ? "Yes" : "No"} />
                <Detail label="Location" value={event.location} />
              </div>
            </div>
            <div class="tile is-8 is-parent" >
              <div class="tile is-child format-box" style={{ justifyContent: "flex-start" }} >
                <h1 class="title is-3 hero-heading-border">Description</h1>
                <p>{event.description.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EventPage

export const query = graphql`
  query SingleEventPage($slug: String) {
    contentfulEvent(slug: { eq: $slug}) {
      day: date(formatString: "ddd, MMM Do")
      time: date(formatString: "hh:mma")
      registration
      title
      poster {
        file {
          url
        }
      }
      description {
        description
      }
    }
  }
`
