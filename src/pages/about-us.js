import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Mission from "../components/about-us/mission"
import Values from "../components/about-us/values"
import Constitution from "../components/about-us/constitution"
import Team from "../components/about-us/team"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// markup
const AboutPage = (props) => {
  let data = props.data.allContentfulPage.nodes[0].content;
  let team = Object.values(props.data).filter(item => item.name)

  return (
    <Layout heading={data.main.heading} subHeading={data.main.blurb} socials={false} size="medium">
      <section class="hero is-medium" >
        <div class="hero-body" style={{ padding: "4rem 5rem 4rem 5rem" }}>
          <div class="tile is-ancestor" style={{ flexWrap: "wrap" }}>
            <Mission data={data.sections.mission} />
            <div id="mission-img" class="tile is-6 is-parent" style={{ justifyContent: "center" }}>
              <div class="img-tile tile is-child">
                <GatsbyImage image={getImage(props.data.group)} alt={"MSA team photo"} />
              </div>
            </div>
            <Values data={data.sections.values} />
            <Constitution data={data.sections.constitution} />
          </div>
        </div>
      </section>

      <section class="hero is-small" id="team-banner">
        <div class="hero-body">
          <p class="title is-2" style={{ color: "white", textAlign: "center", padding: "3rem" }}>
            Meet The Team!
          </p>
        </div>
      </section>

      <Team data={team} />
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
    VPfin: contentfulAsset(title: {eq: "VP of Finance"}) {
      name: description
      title
      gatsbyImageData(cropFocus: CENTER)
    }
    VPadm: contentfulAsset(title: {eq: "VP of Administration"}) {
      name: description
      title
      gatsbyImageData(cropFocus: CENTER)
    }
    Pres: contentfulAsset(title: {eq: "President"}) {
      name: description
      title
      gatsbyImageData(cropFocus: CENTER)
    }
    VPss: contentfulAsset(title: {eq: "VP of Social Services"}) {
      name: description
      title
      gatsbyImageData(cropFocus: CENTER)
    }
    VPcom: contentfulAsset(title: {eq: "VP of Communications"}) {
      name: description
      title
      gatsbyImageData(cropFocus: CENTER)
    }
    VPreg: contentfulAsset(title: {eq: "VP of Religious Affairs"}) {
      name: description
      title
      gatsbyImageData(cropFocus: CENTER)
    }
    group: contentfulAsset(title: {eq: "Group photo"}) {
      gatsbyImageData(cropFocus: CENTER, aspectRatio: 1.7)
    }
  }
`
