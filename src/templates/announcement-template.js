import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AnnouncementPage = (props) => {
  const event = {title: "test"}
  const back =
    <Link to={`/progs-events/#events`} className="button is-outlined is-inverted" href="">
      <span class="icon">
        <FontAwesomeIcon icon="arrow-left" />
      </span>
      <span>All Events</span>
    </Link>

  return (
    <Layout heading={event.title} subHeading={back} socials={false} size="medium">
      
    </Layout>
  )
}

export default AnnouncementPage

export const query = graphql`
  query SingleAnnouncementPage($slug: String) {
    contentfulAnnouncement(slug: { eq: $slug}) {
      title
    }
  }
`
