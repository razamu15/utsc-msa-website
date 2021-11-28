import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Room = (props) => {
  return (
    <div class="pray-area" >
      <figure class="image is-128x128 res-image">
        <img class="" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      <div class="res-info">
        <h1 class="title is-4" style={{ marginBottom: '10px !important' }}>{props.data.name}</h1>
        <h1 class="title is-5" style={{ marginBottom: '10px !important' }}>{props.data.room}</h1>
        <p>{props.data.description}</p>
      </div>
      <p class="control">
        <a href={props.data.link} className="button is-msa-brown card-btn">
          <span>Directions</span>
          <span className="icon is-small">
            <FontAwesomeIcon icon="directions" />
          </span>
        </a>
      </p>
    </div>
  )
}

const Areas = (props) => {
  let data = [{ name: 'IC Prayer Room', room: 'SC-271', link: '#', description: 'main room also has wudu area in closest washroom' }, { name: 'above marketplace', room: 'SW-21', description: 'only for jummuahs', link: '#' }]
  return (
    <div class="pray-areas-list" id="" >
      {/* {data.map(room => <Room data={room} /> )} */}
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmsautsc%2Fvideos%2F1510884622298336%2F&show_text=false&width=560&t=0"
        width="800"
        height="450"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true">
      </iframe>
    </div>
  )
}

export default Areas;
