import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Programs = (props) => {
  return (
    <section className="hero is-fullheight" id="programs">
      <div className="hero-body" style={{paddingTop: "0px"}}>
        <div className="tile is-ancestor" style={{flexWrap: "wrap"}}>
          <div className="tile is-12 is-parent" style={{paddingBottom: "0px"}}>
            <div className="tile is-child format-box" style={{padding: "0px", alignItems: "center"}}>
              <h1 className="title is-3 hero-heading-border">Programs</h1>
              <p style={{display: "flex", alignItems: "center"}}>Below are some of
                the most popular programs of utsc msa. You can also check out the full list by following the
                link
                <button className="button is-link card-btn is-rounded  is-outlined" style={{margin: "0px 15px"}}>
                  <span>All Programs</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon="arrow-right" />
                  </span>
                </button>
              </p>
            </div>
          </div>
          <div className="tile is-parent is-4">
            <div className="tile is-child shadow-hoverable">
              <div className="card-image">
                <figure className="image is-5by3">
                  <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image"
                    className="modal-button" data-target="modal-image2" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3>Orphan Sponsorship</h3>
                  <p>We sponsors orphans because it is a good deed. And some more text here to fill up the
                    space and get it going ahlie?</p>
                  <span className="button is-link card-btn" data-target="modal-image">View Details
                    &rarr;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent is-4 ">
            <div className="tile is-child shadow-hoverable">
              <div className="card-image">
                <figure className="image is-5by3">
                  <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image"
                    className="modal-button" data-target="modal-image2" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3>Islamic Awareness Week</h3>
                  <p>This one has less text here to fill up the space and get it going ahlie?</p>
                  <span className="button is-link card-btn" data-target="modal-image">View Details
                    &rarr;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent is-4 ">
            <div className="tile is-child shadow-hoverable">
              <div className="card-image">
                <figure className="image is-5by3">
                  <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg"
                    alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3>Mentorship</h3>
                  <p>We sponsors orphans because it is a good deed. And some more text here to fill up the
                    space and get it going ahlie?</p>
                  <span className="button is-link card-btn" data-target="modal-image">View Details
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

export default Programs;