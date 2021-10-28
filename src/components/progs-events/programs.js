import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Programs = (props) => {

  return (
    <div class="prog-list">
      {props.programs.nodes.map(prog => {
        return (
          <div key={prog.contentful_id} class="restaurant" >
            <figure class="image is-128x128 res-image" style={{display:'flex', alignItems: 'center'}}>
              <img class="" src={prog.poster.file.url} />
            </figure>
            <div class="prog-name">
              <h1 class="title is-4" style={{ marginBottom: '10px !important' }}>{prog.title}</h1>
            </div>
            <Link to={`/programs/${prog.slug}`} className="control button is-msa-brown card-btn" style={{marginLeft: 'auto'}}>
              <span className="icon is-small">
                <FontAwesomeIcon icon="caret-right" />
              </span>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Programs;
