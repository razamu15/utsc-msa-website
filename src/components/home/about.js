import * as React from "react";

const About = (props) => {
  return (
    <section className="hero is-fullheight slanted" id="about">
      <div className="hero-heading">
        <h1 className="title is-3 hero-heading-border" style={{ color: "white" }}>About MSA</h1>
      </div>
      <div className="hero-body" style={{ padding: "0rem 5rem" }}>
        <div className="tile is-ancestor">
          <div className="tile is-6 is-parent">
            <div className="tile is-child box format-box">
              <h1 className="title is-3">Who We Are</h1>
              <p>some regular text about this post or some excerpt tings, this is a bit longer exceprt so that
                it goes onto the next line and well se what happens gonan next ok, ok</p>
              <span className="button is-link card-btn" data-target="modal-image">Learn More
                &rarr;</span>
            </div>
          </div>
          <div className="tile is-6 is-parent" style={{ justifyContent: "center" }}>
            <div className="img-tile tile is-child">
              <img
                src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;