import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Programs = (props) => {

  return (
    <div class="all-events">
      {props.programs.nodes.map(prog => {
        return (
          <div key={prog.contentful_id} className="all-single-event">
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
                  <Link to={`/programs/${prog.slug}`} className="control button is-msa-brown card-btn">
                    <span className="icon is-small">
                      <FontAwesomeIcon icon="caret-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Programs;
