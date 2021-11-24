import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AnnouncementPage = (props) => {
  const ann = props.data.contentfulAnnouncement
  const back =
    <Link to={`/progs-events/#events`} className="button is-outlined is-inverted" href="">
      <span class="icon">
        <FontAwesomeIcon icon="arrow-left" />
      </span>
      <span>All Events</span>
    </Link>

  return (
    <Layout heading={ann.title} subHeading={back} socials={false} size="medium">
      <section class="hero is-medium" >
        <div class="hero-body" style={{ padding: "4rem 5rem 4rem 5rem" }}>
          <div style={{ width: "fit-content" }}>
            <h1 className="title is-5 hero-heading-border">{ann.date}</h1>
          </div>
          <div class="tile is-ancestor">

            <div class="tile is-parent" id="mission" >
              <div class="tile is-child format-box is-size-5" >
                {documentToReactComponents(JSON.parse(ann.body.raw))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AnnouncementPage

export const query = graphql`
  query SingleAnnouncementPage($slug: String) {
    contentfulAnnouncement(slug: { eq: $slug}) {
      slug
      title
      date(formatString: "hh:mma, ddd MMM Do, YYYY")
      body {
        raw
      }
    }
  }
`
