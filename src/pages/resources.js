import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Food from "../components/resources/food"

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

const ResourcesPage = (props) => {
  let data = props.data.allContentfulPage.nodes[0].content;

  return (
    <Layout heading={data.main.heading} subHeading={data.main.blurb} socials={false} size="medium">
      
      <Section id="jummuah" data={data.sections.jummuah}> </ Section>

      <Section id="praying-areas" data={data.sections.praying_areas}> </ Section>

      <Section id="halal-food" data={data.sections.halal_food}> 
        <Food />
      </Section>


    </Layout>
  )
}

export default ResourcesPage

export const query = graphql`
  {
    allContentfulPage(filter: {title: {eq: "Resources"}}) {
      nodes {
        content {
          main {
            blurb
            heading
          }
          sections{
            jummuah {
              heading
              blurb
            }
            praying_areas {
              heading
              blurb
            }
            halal_food {
              heading
              blurb
            }
          }
        }
      }
    }
  }
`
