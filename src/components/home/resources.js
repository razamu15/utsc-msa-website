import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../utils/font-awesome"

const Resources = (props) => {
  return (
    <section className="hero is-medium" id="resources">
      <div className="hero-heading">
        <h1 className="title is-3 hero-heading-border">Resources</h1>
      </div>
      <div className="hero-body" style={{ padding: "4rem 5rem" }}>
        <div className="tile is-ancestor">
          <div className="tile is-7 is-parent is-vertical">
            <div className="tile is-child box format-box">
              <p style={{ margin: "0px" }}>The MSA has compiled resources for you to meet your islamic needs while
                on campus. If there is something missing you can always contact us to let us know! </p>
            </div>
            <div className="img-tile tile is-child ">
              <img
                src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />

            </div>
          </div>
          <div className="tile is-parent is-vertical">
            <div className="tile is-child box shadow-hoverable format-box">
              <div className="resource-tile">
                <span className="icon has-text-link is-large">
                  <FontAwesomeIcon icon="pray" size="2x" />
                </span>
                <h1 className=" title is-4">Jummuah</h1>
              </div>
              <p>See Jummuah timings on campus</p>
            </div>
            <div className="tile is-child box shadow-hoverable format-box">
              <div className="resource-tile">
                <span className="icon has-text-link is-large">
                  <FontAwesomeIcon icon="mosque" size="2x" />
                </span>
                <h1 className=" title is-4">Praying Areas</h1>
              </div>
              <p>Prayer Space on Campus</p>
            </div>
            <div className="tile is-child box shadow-hoverable format-box">
              <div className="resource-tile">
                <span className="icon has-text-link is-large">
                  <FontAwesomeIcon icon="utensils" size="2x" />
                </span>
                <h1 className=" title is-4">Halal Food</h1>
              </div>
              <p>Find halal place to eat in and around the campus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources;