import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Events from "../components/progs-events/events"

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
      <Section id="announcements" data={data.sections.announcements} />

      <Section id="events" data={data.sections.events} >
        <Events />
      </Section>

      <Section id="programs" data={data.sections.programs} />

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
  }
`
