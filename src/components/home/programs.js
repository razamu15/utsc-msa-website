import * as React from "react";
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Programs = (props) => {
  return (
    <section className="hero is-fullheight" id="programs">
      <div className="hero-body" style={{ paddingTop: "0px" }}>
        <div className="tile is-ancestor" style={{ flexWrap: "wrap" }}>
          <div className="tile is-12 is-parent" style={{ paddingBottom: "0px" }}>
            <div className="tile is-child format-box" style={{ padding: "0px", alignItems: "center" }}>
              <h1 className="title is-3 hero-heading-border">{props.data.heading}</h1>
              <p style={{ display: "flex", alignItems: "center" }}>Below are some of
                {props.data.blurb}
                <button className="button card-btn is-rounded msa-brown-outline">
                  <span>All Programs</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon="arrow-right" />
                  </span>
                </button>
              </p>
            </div>
          </div>
          {props.programs.nodes.map(prog => {
            return (
              <div key={prog.contentful_id} className="tile is-parent is-4">
                <div className="tile is-child shadow-hoverable">
                  <div className="card-image">
                    <figure className="image is-5by3">
                      <img src={prog.poster.file.url} alt="Placeholder image"
                        className="modal-button" data-target="modal-image2" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <h3>{prog.title}</h3>
                      <p>{prog.description.description.length > 115 ? `${prog.description.description.substring(0, 115)}...` : prog.description.description}</p>
                      <Link to={`/programs/${prog.slug}`} className="button is-link is-msa-blue card-btn">
                        <span>Learn More</span>
                        <span className="icon is-small">
                          <FontAwesomeIcon icon="info" />
                        </span>
                      </Link>
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

export default Programs;