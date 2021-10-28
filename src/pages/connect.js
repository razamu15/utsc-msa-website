import * as React from "react"
import { graphql } from "gatsby"
import Contact from "../components/connect/contact"
import ExecTeam from "../components/connect/exec-team"
import Involvement from "../components/connect/involvement"
import Membership from "../components/connect/membership"
import Volunteering from "../components/connect/volunteering"
import Layout from "../components/layout"

// markup
const ConnectPage = (props) => {
  let data = props.data.allContentfulPage.nodes[0].content;
  return (
    <Layout heading={data.main.heading} subHeading={data.main.blurb} socials={false} size="medium">
      <Involvement data={data.sections.involvement}>
        <Membership data={data.sections.membership}/>
        <Volunteering data={data.sections.volunteering}/>
        <ExecTeam data={data.sections.exec_team}/>
      </Involvement>
      <Contact />
    </Layout>
  )
}

export default ConnectPage;


export const query = graphql`
  {
    allContentfulPage(filter: {title: {eq: "Connect"}}) {
      nodes {
        content {
          main {
            blurb
            heading
          }
          sections {
            involvement {
              blurb
              heading
            }
            exec_team {
              blurb1
              blurb2
              heading
            }
            volunteering {
              blurb1
              blurb2
              heading
            }
            membership {
              blurb1
              blurb2
              heading
              link
            }
          }
        }
      }
    }
  }
`
