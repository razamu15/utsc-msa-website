import * as React from "react";

const Membership = (props) => {
  return (
    <section className="hero is-medium" id="membership">
      <div className="hero-body">
        <p className="title is-2" style={{color: "white"}}>
          Come be a Part of the MSA!
        </p>
        <p className="subtitle" style={{textAlign: "center"}}>
          some generic text thing that is super emotional and inspirational about campur involvement
        </p>
        <span className="button is-link is-large card-btn" data-target="modal-image">Sign Up
          &rarr;</span>
      </div>
    </section>
  )
}

export default Membership;