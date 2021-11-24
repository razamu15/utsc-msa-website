import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Announcments = (props) => {
  return (
    <table class="table is-fullwidth is-hoverable">
      <tbody>
        {props.announcements.nodes.map(ann => {
          return (
            <tr id={ann.contentful_id} class="">
              <td>{ann.date}</td>
              <td>{ann.title}</td>
              <td>
                <p class="control">
                  <Link to={`/announcement/${ann.slug}`} class="button is-msa-brown card-btn">
                    <span>View Full</span>
                    <span class="icon is-small">
                      <FontAwesomeIcon icon="scroll" />
                    </span>
                  </Link>
                </p>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Announcments;