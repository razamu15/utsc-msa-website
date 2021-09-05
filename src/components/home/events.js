import * as React from "react";

const Events = (props) => {
  return (
    <section className="hero is-fullheight" id="events">
      <div className="hero-body">
        <div className="tile is-ancestor" style={{flexWrap: "wrap"}}>
          <div className="tile is-3 is-vertical is-parent">
            <div className="tile is-child format-box">
              <h1 className="title is-3 hero-heading-border">Latest Events</h1>
              <p>we hosts one-off events through out the hear for the muslim an non-muslim community of UTSC
                <br /> <br /> <br />
                Check out on the latest events on the right of visit the link to see all past and future
                events!
              </p>
              <button className="button is-link card-btn is-rounded  is-outlined" style={{margin: "0px 15px"}}>
                <span>All Events</span>
                <span className="icon is-small">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="tile  is-vertical is-parent">
            <div className="tile is-child shadow-hoverable ">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image"
                    className="modal-button" data-target="modal-image2" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3>Event Title</h3>
                  <h4>Jan 31, 2031 @ 6:00pm</h4>
                  <span className="button is-link card-btn" data-target="modal-image">Register
                    &rarr;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tile  is-vertical is-parent">
            <div className="tile is-child shadow-hoverable ">
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image"
                    className="modal-button" data-target="modal-image2" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3>Event Title</h3>
                  <h4>Jan 31, 2031 @ 6:00pm</h4>
                  <span className="button is-link card-btn" data-target="modal-image">Register
                    &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events;