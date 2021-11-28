import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resources = (props) => {
  return (
    <section className="hero is-medium" id="resources" style={{ paddingBottom: '30px' }}>
      <div className="hero-heading">
        <h1 className="title is-3 hero-heading-border">{props.data.heading}</h1>
      </div>
      <div className="hero-body" style={{ padding: "4rem 5rem" }}>
        <div className="tile is-ancestor">
          <div className="tile is-6 is-parent is-vertical">
            <div className="img-tile tile is-child ">
              <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
          <div className="resources-cont" >
            <div>
              <p style={{margin: '0px'}}> {props.data.blurb} </p>
            </div>
            <div className="col-tiles">

              <Link to={'/resources/#jummuah'} className=" box shadow-hoverable format-box">
                <div className="resource-tile">
                  <span className="icon has-text-msa-blue is-large">
                    <FontAwesomeIcon icon="pray" size="2x" />
                  </span>
                  <h1 className=" title is-4">Jummuah</h1>
                </div>
                <p>See Jummuah timings on campus</p>
              </Link>
              <Link to={'/resources/#praying-areas'} className=" box shadow-hoverable format-box">
                <div className="resource-tile">
                  <span className="icon has-text-msa-blue is-large">
                    <FontAwesomeIcon icon="mosque" size="2x" />
                  </span>
                  <h1 className=" title is-4">Praying Areas</h1>
                </div>
                <p>Prayer Spaces on Campus</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources;