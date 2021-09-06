import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// markup
const Involvement = (props) => {
   const data = useStaticQuery(graphql`{
      allContentfulPage(filter: {title: {eq: "Connect"}}) {
        nodes {
          content {
            sections{
               involvement{
                  heading
                  blurb
               }
            }
          }
        }
      }
   }`)
   let usableData = data.allContentfulPage.nodes[0].content.sections.involvement

   return (
      <section class="hero is-medium" id="involvement">
         <div class="hero-body" style={{padding: "3rem 5rem 4rem 5rem"}}>
            <div class="tile is-ancestor" style={{flexWrap: "wrap"}}>
               <div class="tile is-12 is-parent">
                  <div class="tile is-child format-box" style={{padding: "0px"}}>
                     <h1 class="title is-2 hero-heading-border">{usableData.heading}</h1>
                     <p>{usableData.blurb}</p>
                  </div>
               </div>
               {props.children}
            </div>
         </div>
      </section>
   )
}

export default Involvement;
