import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Membership = (props) => {
  return (
    <section className="hero is-medium" id="membership">
      <div className="hero-body">
        <p className="title is-2" style={{ color: "white" }}>
          Come be a Part of the MSA!
        </p>
        <p className="subtitle" style={{ textAlign: "center" }}>
          some generic text thing that is super emotional and inspirational about campur involvement
        </p>
        <button className="button is-link card-btn is-large">
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