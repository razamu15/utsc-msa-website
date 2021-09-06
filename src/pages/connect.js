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
  let data = props.data.allContentfulPage.nodes[0].content.main;
  return (
    <Layout heading={data.heading} subHeading={data.blurb} socials={false} size="medium">
      <Involvement>
        <Membership />
        <Volunteering />
        <ExecTeam />
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
        }
      }
    }
  }
`
