import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Mission from "../components/about-us/mission"
import Values from "../components/about-us/values"
import Constitution from "../components/about-us/constitution"
import Team from "../components/about-us/team"

// markup
const AboutPage = (props) => {
  let data = props.data.allContentfulPage.nodes[0].content;
  return (
    <Layout heading={data.main.heading} subHeading={data.main.blurb} socials={false} size="medium">
      <section class="hero is-medium" >
        <div class="hero-body" style={{padding: "4rem 5rem 4rem 5rem"}}>
          <div class="tile is-ancestor" style={{flexWrap: "wrap"}}>
            <Mission data={data.sections.mission} />
            <div id="mission-img" class="tile is-6 is-parent" style={{justifyContent: "center"}}>
              <div class="img-tile tile is-child">
                <img
                  src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
            </div>
            <Values data={data.sections.values} />
            <Constitution data={data.sections.constitution} />
          </div>
        </div>
      </section>

      <section class="hero is-small" id="team-banner">
        <div class="hero-body">
          <p class="title is-2" style={{color: "white", textAlign: "center", padding: "3rem"}}>
            Meet The Team!
          </p>
        </div>
      </section>

      <Team data={data.sections.team} />
    </Layout>
  )
}

export default AboutPage;

export const query = graphql`
  {
    allContentfulPage(filter: {title: {eq: "About-Us"}}) {
      nodes {
      content {
        sections {
          mission {
            blurb1
            blurb2
            heading
          }
          values {
            blurb1
            blurb2
            heading
          }
          constitution {
            blurb1
            blurb2
            heading
            link
          }
          team {
            name
            title
          }
        }
        main {
          blurb
          heading
        }
      }
    }
    }
  }
`
