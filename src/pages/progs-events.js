import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Events from "../components/progs-events/events"
import Announcements from "../components/progs-events/announcement"
import Programs from "../components/progs-events/programs"

// markup
const Section = (props) => {
  return (
    <section class="hero is-medium" id={props.id}>
      <div class="hero-body" style={{ padding: "4rem 5rem 4rem 5rem" }}>
        <div class="tile is-ancestor" style={{ flexWrap: "wrap" }}>
          <div class="tile is-parent" id="mission" >
            <div class="tile is-child format-box" >
              <h1 class="title is-2 hero-heading-border">{props.data.heading}</h1>
              <p>{props.data.blurb}</p>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// markup
const PEPage = (props) => {
  let data = props.data.allContentfulPage.nodes[0].content;

  return (
    <Layout heading={data.main.heading} subHeading={data.main.blurb} socials={false} size="medium">
      <Section id="announcements" data={data.sections.announcements}>
        <Announcements announcements={props.data.announcements}/>
      </Section>

      <Section id="events" data={data.sections.events} >
        <Events events={props.data.events} />
      </Section>

      <Section id="programs" data={data.sections.programs}>
        <Programs programs={props.data.programs} />
      </Section>

    </Layout>
  )
}

export default PEPage

export const query = graphql`
  {
    allContentfulPage(filter: {title: {eq: "Progs-Events"}}) {
      nodes {
        content {
          main {
            blurb
            heading
          }
          sections{
            announcements{
              heading
              blurb
            }
            events{
              heading
              blurb
            }
            programs{
              heading
              blurb
            }
          }
        }
      }
    }
    programs: allContentfulProgram {
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
    events: allContentfulEvent(sort: {fields: date, order: ASC}) {
      nodes {
        contentful_id
        title
        location
        day: date(formatString: "ddd")
        date: date(formatString: "MMM Do")
        time: date(formatString: "hh:mma")
        slug
      }
    }
    announcements: allContentfulAnnouncement(sort: {fields: date, order: DESC}) {
      nodes {
        contentful_id
        date(formatString: "hh:mma, ddd MMM Do")
        title
        slug
      }
    }
  }
`
