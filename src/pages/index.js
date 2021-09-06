import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import About from "../components/home/about"
import Events from "../components/home/events"
import Programs from "../components/home/programs"
import Announcements from "../components/home/announcements"
import Action from "../components/home/action"
import Resources from "../components/home/resources"
import Sponsors from "../components/home/sponsors"
import Contact from "../components/connect/contact"

// markup
const IndexPage = (props) => {
  let data = props.data.allContentfulPage.nodes[0].content;

  return (
    <Layout heading={data.main.heading} subHeading={data.main.blurb} socials={true} size="fullheight">
      <Announcements />
      <About data={data.sections.about} />
      <Events data={data.sections.events} events={props.data.latestEvents} />
      <Programs data={data.sections.programs} />
      <Sponsors />
      <Resources data={data.sections.resources} />
      <Action data={data.sections.action} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allContentfulPage(filter: {title: {eq: "Home"}}) {
      nodes {
        content {
          sections {
            events {
              blurb
              heading
            }
            action {
              blurb
              heading
            }
            programs {
              blurb
              heading
            }
            resources {
              blurb
              heading
            }
            about {
              blurb
              heading
              subHeading
            }
          }
          main {
            blurb
            heading
          }
        }
      }
    }
  	latestEvents: allContentfulEvent(sort: {fields: date, order: ASC}, limit: 2) {
      nodes {
        contentful_id
        title
        date(formatString: "ddd, MMM Do @ hh:mma")
        registration
        slug
        poster { 
          file {
            url
          }
          title
        }
      }
    }
  }
`
