import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Announcements = (props) => {
  let data = props.announcements.nodes;

  const [currentAnn, setCurrentAnn] = React.useState(data[0].slug);


  return (
    <section className="hero is-medium" id="announcements">
      <div className="hero-heading">
        <h1 className="title is-3 hero-heading-border">Announcements</h1>
      </div>
      <div className="hero-body" style={{ padding: "4rem 5rem" }}>
        <div className="tile is-ancestor">
          {currentAnn ?
            data.filter(ann => ann.slug === currentAnn).map(current => {
              return (
                <div className="tile is-7 is-parent">
                  <div className="tile is-child box format-box">
                    <h1 className="title is-4" style={{color: '#29648b'}}>{current.title}</h1>

                    <h1 className="title is-5 is-italic pt-3" style={{fontWeight: '300'}}>{current.date}</h1>
                    {documentToReactComponents(JSON.parse(current.body.raw))}

                  </div>
                </div>
              )
            })
            : true
          }

          <div className="tile is-parent is-vertical">
            {data.filter(ann => ann.slug !== currentAnn).map(ann => {
              return (
                <div id={ann.slug} className="tile is-child box shadow-hoverable" style={{ cursor: "pointer" }} onClick={event => setCurrentAnn(event.currentTarget.id)}>
                  <h1 className="title is-5">{ann.title}</h1>
                  <br />
                  <h1 className="title is-6 is-italic">{ann.date}</h1>
                </div>
              )
            })}

            <Link to={`/progs-events/#announcements`} className="tile is-child">
              <button className="button card-btn is-rounded msa-brown-outline">
                <span>View All Announcements</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon="arrow-right" />
                </span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Announcements;