import * as React from "react"

// markup
const Involvement = (props) => {
   return (
      <section class="hero is-medium" id="involvement">
         <div class="hero-body" style={{padding: "3rem 5rem 4rem 5rem"}}>
            <div class="tile is-ancestor" style={{flexWrap: "wrap"}}>
               <div class="tile is-12 is-parent">
                  <div class="tile is-child format-box" style={{padding: "0px"}}>
                     <h1 class="title is-2 hero-heading-border">Get Involved</h1>
                     <p>some regular text about this post or some excerpt tings, this is a bit longer exceprt so that
                        it goes onto the next line and well se what happens gonan next ok, ok. just a little bot
                        more text to make it llook more full</p>
                  </div>
               </div>
               {props.children}
            </div>
         </div>
      </section>
   )
}

export default Involvement;
