import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// markup
const Detail = (props) => {
  return (
    <div class="detail">
      <h1 class="label is-4">{props.label}</h1>
      <h1 class="value is-5">{props.value}</h1>
    </div>
  )
}

const EventPage = (props) => {
  const event = props.data.contentfulEvent
  const posterImg = getImage(event.poster)

  const back =
    <Link to={`/progs-events/#events`} className="button is-outlined is-inverted" href="">
      <span class="icon">
        <FontAwesomeIcon icon="arrow-left" />
      </span>
      <span>All Events</span>
    </Link>

  return (
    <Layout heading={event.title} subHeading={back} socials={false} size="medium">
      <section class="hero is-medium" >
        <div class="hero-body" style={{ padding: "4rem 5rem 4rem 5rem" }}>
          <div class="tile is-ancestor" style={{ flexWrap: "wrap" }}>

            <div class="tile is-12 is-parent" >
              <div class="tile is-child event-details" >
                <Detail label="Date" value={event.day} />
                <Detail label="Time" value={event.time} />
                <Detail label="Location" value={event.location} />
                <Detail label="Registration Required" value={event.registration ? "Yes" : "No"} />
                {event.registration ?
                  <p class="control">
                    <a href={event.registration} className="button is-primary card-btn">
                      <span>Register</span>
                      <span className="icon is-small">
                        <FontAwesomeIcon icon="user-plus" />
                      </span>
                    </a>
                  </p>
                  : false
                }
              </div>
            </div>

            <div class="tile is-6 is-parent" id="mission" >
              <div class="tile is-child format-box" >
                <p>{event.description.description}</p>

              </div>
            </div>
            <div id="mission-img" class="tile is-6 is-parent" style={{ justifyContent: "center" }}>
              <div class="img-tile tile is-child">
                <GatsbyImage image={posterImg} alt={'event poster'} />
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
      location
      poster {
        gatsbyImageData
      }
      description {
        description
      }
    }
  }
`
