import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Event = (props) => {
  return (
    <Link class="event" >
      <span></span>
      <div class="event-day-date">
        <h1 class="title is-4"> {props.data.day}</h1>
        <h1 class="title is-5"> {props.data.date}</h1>
      </div>
      <h1 class="event-time title is-5">{props.data.time}</h1>
      <div class="event-name-loc">
        <h1 class="title is-4"> {props.data.name}</h1>
        <h1 class="title is-5 event-loc"> {props.data.location}</h1>
      </div>
      <p class="control">
        <a href={props.data.link} className="button is-msa-brown card-btn">
          <span className="icon is-small">
            <FontAwesomeIcon icon="caret-right" />
          </span>
        </a>
      </p>
    </Link>
  )
}

const Events = (props) => {
  let data = [{ name: 'some random thing', location: 'seomwhere on camputs', day: 'Sun', date: 'Sep 21', time: '11;00 am', slug: 'ting-ting' }]
  return (
    <div class="pray-areas-list" id="" >
      {data.map(ev => <Event data={ev} />)}
    </div>
  )
}

export default Events;
