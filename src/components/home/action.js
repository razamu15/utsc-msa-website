import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Membership = (props) => {
  return (
    <section className="hero is-medium" id="membership">
      <div className="hero-body">
        <p className="title is-2" style={{ color: "white" }}>
          {props.data.heading}
        </p>
        <p className="subtitle" style={{ textAlign: "center" }}>
          {props.data.blurb}
        </p>
        <button className="button is-link is-msa-blue card-btn is-large">
          <span>Sign Up</span>
          <span className="icon is-small">
            <FontAwesomeIcon icon="arrow-right" />
          </span>
        </button>
      </div>
    </section>
  )
}

export default Membership;