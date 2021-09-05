import * as React from "react"
import Layout from "../components/layout"
import About from "../components/home/about"
import Events from "../components/home/events"
import Programs from "../components/home/programs"
import Announcements from "../components/home/announcements"
import Membership from "../components/home/membership"
import Resources from "../components/home/resources"
import Sponsors from "../components/home/sponsors"

// markup
const IndexPage = () => {
  return (
    <Layout heading="MSA" subHeading="some random text">
      <Announcements />
      <About />
      <Events />
      <Programs />
      <Sponsors />
      <Resources />
      <Membership />
    </Layout>
  )
}

export default IndexPage
