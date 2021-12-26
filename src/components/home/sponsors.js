import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Sponsors = (props) => {
  return (
    <section class="hero is-small" id="sponsors">
      <div class="hero-body" id="sponsors-body">
        <div>
          <p class="title is-4" style={{ textAlign: "center" }}>
            Partners & <br /> Sponsors
          </p>
          {props.data.nodes.map(sponsor => {
            return (
              <a target="_blank" href={sponsor.link}>
                <GatsbyImage image={getImage(sponsor.logo)} alt={sponsor.title} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sponsors;