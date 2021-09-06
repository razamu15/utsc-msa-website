import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Membership = (props) => {
   const data = useStaticQuery(graphql`{
      allContentfulPage(filter: {title: {eq: "Connect"}}) {
        nodes {
          content {
            sections{
               membership{
                  heading
                  blurb1
                  blurb2
               }
            }
          }
        }
      }
   }`)
   let usableData = data.allContentfulPage.nodes[0].content.sections.membership

  return (
    <div class="tile is-4 is-parent">
      <div class="tile is-child format-box">
        <h1 class="title is-3 ">{usableData.heading}</h1>
        <p>{usableData.blurb1}</p>

        <p>{usableData.blurb2}</p>
        
        <span className="button is-link card-btn" data-target="modal-image">Register &rarr;</span>
      </div>
    </div>
  )
}

export default Membership;
