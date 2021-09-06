import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// markup
const EventsPage = (props) => {
  let data = props.data.allContentfulPage.nodes[0].content;

  return (
    <Layout heading={data.main.heading} subHeading={data.main.blurb} socials={false} size="medium">
      random text ah ee
    </Layout>
  )
}

export default EventsPage

export const query = graphql`
  {
    allContentfulPage(filter: {title: {eq: "Events"}}) {
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
