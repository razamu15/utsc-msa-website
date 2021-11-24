import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProgramPage = (props) => {
  const prog = props.data.contentfulProgram
  const posterImg = getImage(prog.poster)

  const back =
    <Link to={`/progs-events/#programs`} className="button is-outlined is-inverted" href="">
      <span class="icon">
        <FontAwesomeIcon icon="arrow-left" />
      </span>
      <span>All Programs</span>
    </Link>

  return (
    <Layout heading={prog.title} subHeading={back} socials={false} size="medium">
      <section class="hero is-medium" >
        <div class="hero-body" style={{ padding: "4rem 5rem 4rem 5rem" }}>
          <div class="tile is-ancestor" style={{ flexWrap: "wrap" }}>
            <div class="tile is-6 is-parent" id="mission" >
              <div class="tile is-child format-box" >
                <p>{prog.description.description}</p>

              </div>
            </div>
            <div id="mission-img" class="tile is-6 is-parent" style={{ justifyContent: "center" }}>
              <div class="img-tile tile is-child">
                <GatsbyImage image={posterImg} alt={'program poster'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProgramPage;

export const query = graphql`
  query SingleProgramPage($slug: String) {
    contentfulProgram(slug: { eq: $slug}) {
      title
      poster {
        gatsbyImageData
      }
      description {
        description
      }
    }
  }
`
