import * as React from "react";
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Events = (props) => {
  return (
    <section className="hero is-fullheight" id="events">
      <div className="hero-body">
        <div className="tile is-ancestor" style={{ flexWrap: "wrap" }}>
          <div className="tile is-3 is-vertical is-parent">
            <div className="tile is-child format-box">
              <h1 className="title is-3 hero-heading-border">{props.data.heading}</h1>
              <p> {props.data.blurb} </p>
              <Link to={'progs-events/#events'} className="button  card-btn is-rounded  is-outlined msa-brown-outline" style={{}}>
                <span>All Events</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon="arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          {props.events.nodes.map(event => {
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
                            <a href={event.registration} className="button is-msa-brown card-btn">
                              <span>Register</span>
                              <span className="icon is-small">
                                <FontAwesomeIcon icon="user-plus" />
                              </span>
                            </a>
                          </p> : false
                        }
                        <p class="control">
                          <Link to={`/events/${event.slug}`} className="button is-link is-msa-blue card-btn">
                            <span>View Details</span>
                            <span className="icon is-small">
                              <FontAwesomeIcon icon="info" />
                            </span>
                          </Link>
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

export default Events;