import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Announcements = (props) => {
  return (
    <section className="hero is-medium" id="announcements">
      <div className="hero-heading">
        <h1 className="title is-3 hero-heading-border">Announcements</h1>
      </div>
      <div className="hero-body" style={{padding: "4rem 5rem"}}>
        <div className="tile is-ancestor">
          <div className="tile is-7 is-parent">
            <div className="tile is-child box format-box">
              <h1 className="title is-4">Announcement title</h1>

              <h1 className="title is-5 is-italic pt-3">September 8, 2020</h1>
              <p>this text is copid from an announcement on the previous website <br /> <br />
                The Multi-Faith Prayer Room (SL281) is closed until further notice due to the lockdown
                restrictions.
                <br /> <br />
                If you have any questions or concerns please email us at utscmsa1@gmail.com.
              </p>

            </div>
          </div>
          <div className="tile is-parent is-vertical">
            <div className="tile is-child box shadow-hoverable">
              <h1 className="title is-5">Announcement title</h1>
              <br />
              <h1 className="title is-6 is-italic">September 8, 2020</h1>
            </div>
            <div className="tile is-child box shadow-hoverable">
              <h1 className="title is-5">Announcement title - something a little longer</h1>
              <br />
              <h1 className="title is-6 is-italic">September 1, 2020</h1>
            </div>
            <div className="tile is-child">
              <button className="button card-btn is-rounded msa-brown-outline">
                <span>View All Announcements</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon="arrow-right" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Announcements;