import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

// markup
const EventPage = (props) => {
  console.log(props)

  return (
    <Layout heading={"some"} subHeading={"thing"} socials={false} size="medium">
      random text ah in a singular event page ee
    </Layout>
  )
}

export default EventPage

// export const query = graphql`
//   {
//   }
// `
