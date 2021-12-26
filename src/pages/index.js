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
    <Layout home={true} socials={true} size="fullheight">
      <Announcements announcements={props.data.latestAnnouncements}/>
      <About data={data.sections.about} image={props.data.group} />
      <Events data={data.sections.events} events={props.data.latestEvents} />
      <Programs data={data.sections.programs} programs={props.data.showcasePrograms} />
      <Sponsors />
      <Resources data={data.sections.resources} image={props.data.resources} />
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
        date(formatString: "dddd, MMM Do | h:mma")
        registration
        registrationLink
        slug
        poster { 
          file {
            url
          }
          title
        }
      }
    }
    showcasePrograms: allContentfulProgram(filter: {showcase: {eq: true}}) {
      nodes {
        contentful_id
        title
        slug
        description {
          description
        }
        poster {
          file {
            url
          }
        }
      }
    }
    latestAnnouncements: allContentfulAnnouncement(sort: {fields: date, order: ASC}, limit: 3) {
      nodes {
        slug
        title
        date(formatString: "hh:mma, ddd MMM Do, YYYY")
        body {
          raw
        }
      }
    }
    group: contentfulAsset(title: {eq: "Group photo"}) {
      gatsbyImageData(cropFocus: CENTER, aspectRatio: 1.7)
    }
    resources: contentfulAsset(title: {eq: "Resources"}) {
      gatsbyImageData(cropFocus: CENTER, aspectRatio: 1.7)
    }
  }
`
