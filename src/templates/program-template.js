import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgramPage = (props) => {
  console.log(props)
  const prog = props.data.contentfulProgram
  const back = 
  <a class="button is-outlined is-inverted">
    <span class="icon">
      <FontAwesomeIcon icon="arrow-left" />
    </span>
    <span>All Programs</span>
  </a>

  return (
    <Layout heading="Programs" subHeading={back} socials={false} size="medium">
      <section class="hero is-medium" >
        <div class="hero-body" style={{ padding: "4rem 5rem 4rem 5rem" }}>
          <div class="tile is-ancestor" style={{ flexWrap: "wrap" }}>
            <div class="tile is-3 is-parent" >
              <div class="tile is-child format-box" >
                <h1 class="title is-2">{prog.title}</h1>
              </div>
            </div>
            <div id="mission-img" class="tile is-9 is-parent" style={{ justifyContent: "center" }}>
              <div class="img-tile tile is-child">
                <img
                  src={prog.poster.file.url} />
              </div>
            </div>
            <div class="tile is-parent" >
              <div class="tile is-child format-box" >
                <p>{prog.description.description}</p>
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
        file {
          url
        }
      }
      description {
        description
      }
    }
  }
`
