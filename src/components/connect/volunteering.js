import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Volunteering = (props) => {
   const data = useStaticQuery(graphql`{
      allContentfulPage(filter: {title: {eq: "Connect"}}) {
        nodes {
          content {
            sections{
               volunteering{
                  heading
                  blurb1
                  blurb2
               }
            }
          }
        }
      }
   }`)
   let usableData = data.allContentfulPage.nodes[0].content.sections.volunteering

  return (
    <div class="tile is-4 is-parent">
      <div class="tile is-child format-box">
        <h1 class="title is-3 ">{usableData.heading}</h1>
        <p>{usableData.blurb1}</p>

        <p>{usableData.blurb2}</p>
      </div>
    </div>
  )
}

export default Volunteering;
