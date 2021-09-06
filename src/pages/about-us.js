import * as React from "react"
import Layout from "../components/layout"
import Mission from "../components/about-us/mission"
import Values from "../components/about-us/values"
import Constitution from "../components/about-us/constitution"

// markup
const AboutPage = () => {
  return (
    <Layout heading="ABOUT US" socials={false} size="medium">
      <section class="hero is-medium" >
        <div class="hero-body" style={{padding: "4rem 5rem 4rem 5rem"}}>
          <div class="tile is-ancestor" style={{flexWrap: "wrap"}}>
            <Mission />
            <div id="mission-img" class="tile is-6 is-parent" style={{justifyContent: "center"}}>
              <div class="img-tile tile is-child">
                <img
                  src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
            </div>
            <Values />
            <Constitution />
          </div>
        </div>

      </section>

      <section class="hero is-small" id="team-banner">
        <div class="hero-body">
          <p class="title is-2" style="color: white; text-align: center; padding: 3rem">
            Meet The Team!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage;
