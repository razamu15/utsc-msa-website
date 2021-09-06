import * as React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Events = (props) => {
  const data = useStaticQuery(graphql`{
    allContentfulEvent(sort: {fields: date, order: ASC}, limit: 2) {
      nodes {
        contentful_id
        title
        date(formatString: "ddd, MMM Do @ hh:mma")
        registration
        slug
        poster { 
          file {
            url
          }
          title
        }
      }
    }
  }`)

  return (
    <section className="hero is-fullheight" id="events">
      <div className="hero-body">
        <div className="tile is-ancestor" style={{ flexWrap: "wrap" }}>
          <div className="tile is-3 is-vertical is-parent">
            <div className="tile is-child format-box">
              <h1 className="title is-3 hero-heading-border">Latest Events</h1>
              <p> {props.data.blurb} </p>
              <button className="button is-link card-btn is-rounded  is-outlined" style={{ margin: "0px 15px" }}>
                <span>All Events</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon="arrow-right" />
                </span>
              </button>
            </div>
          </div>
          {data.allContentfulEvent.nodes.map(event => {
            return (
              <div key={event.contentful_id} className="tile  is-vertical is-parent">
                <div className="tile is-child shadow-hoverable ">
                  <div className="card-image">
                    <figure className="image is-5by4">
                      <img src={event.poster.file.url} alt={event.poster.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content ">
                      <h3>{event.title}</h3>
                      <h4>{event.date}</h4>
                      <div class="field is-grouped">
                        {event.registration ?
                          <p class="control">
                            <a href={event.registration} className="button is-primary card-btn">
                              <span>Register</span>
                              <span className="icon is-small">
                                <FontAwesomeIcon icon="user-plus" />
                              </span>
                            </a>
                          </p> : false
                        }
                        <p class="control">
                          <a href={`/events/${event.slug}`} className="button is-link card-btn">
                            <span>Learn More</span>
                            <span className="icon is-small">
                              <FontAwesomeIcon icon="info" />
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// const yes = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//   // let data= {}
//   console.log(data);
//   return <div>hi</div>
// }
export default Events;