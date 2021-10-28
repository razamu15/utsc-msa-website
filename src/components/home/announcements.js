import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Announcements = (props) => {
  let data = [{ slug: 'ann-1', title: 'prayer room closed', time: 'September 8, 2020', content: 'this text is copid from an announcement on the previous website The Multi-Faith Prayer Room (SL281) is closed until further notice due to the lockdown restrictions. If you have any questions or concerns please email us at utscmsa1@gmail.com.' }, { slug: 'ann-2', title: 'school closed', time: 'September 8, 2020', content: 'diff cont' }, { slug: 'ann-3', title: 'life closed', time: 'September 8, 2020', content: 'another diff cont' }]

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
                    <h1 className="title is-4">{current.title}</h1>

                    <h1 className="title is-5 is-italic pt-3">{current.time}</h1>
                    <p>{current.content}</p>

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
                  <h1 className="title is-6 is-italic">{ann.time}</h1>
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