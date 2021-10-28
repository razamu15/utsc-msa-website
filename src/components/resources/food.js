import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Restaurant = (props) => {
  return (
    <div class="restaurant" >
        <figure class="image is-128x128 res-image">
          <img class="" src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        <div class="res-info">
          <h1 class="title is-4" style={{marginBottom: '10px !important'}}>{props.data.name}</h1>
          <p>{props.data.location}</p>
          <p class="control">
            <a href={props.data.link} className="button is-msa-brown card-btn">
              
              <span className="icon is-small">
                <FontAwesomeIcon icon="external-link-alt" />
              </span>
            </a>
          </p>
        </div>
      </div>
  )
}

const Food = (props) => {
  let data = [{name: 'Hero Bruger', location:'inside student centre', link:'#'}, {name: 'paramount', location:'marketpalce', link:'#'}, {name: 'nasir hot dog', location:'outside student centre', link:'#'}]
  return (
    <div class="res-list" id="" >
      {data.map(res => <Restaurant data={res} /> )}
    </div>
  )
}

export default Food;
