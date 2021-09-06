import * as React from "react"
import Contact from "../components/connect/contact"
import ExecTeam from "../components/connect/exec-team"
import Involvement from "../components/connect/involvement"
import Membership from "../components/connect/membership"
import Volunteering from "../components/connect/volunteering"
import Layout from "../components/layout"

// markup
const AboutPage = () => {
  return (
    <Layout heading="CONNECT WITH US" socials={false} size="medium">
      <Involvement>
          <Membership />
          <Volunteering />
          <ExecTeam />
      </Involvement>
      <Contact />
    </Layout>
  )
}

export default AboutPage;
