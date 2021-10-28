import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Announcments = (props) => {
  let data = [{ name: 'some random thing', location: 'seomwhere on camputs', day: 'Sun', date: 'Sep 21', time: '11;00 am', slug: 'ting-ting' }]

  return (
    <table class="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Time</th>
          <th style={{ width: '50%' }}>Announcement</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr class="">
          <td>monday. 13 sep, 5pm</td>
          <td>School Closed</td>
          <td>
            <p class="control">
              <Link to={'#'} class="button is-msa-brown card-btn">
                <span>View Full</span>
                <span class="icon is-small">
                  <FontAwesomeIcon icon="scroll" />
                </span>
              </Link>
            </p>
          </td>
        </tr>
        <tr class="">
          <td>monday. 13 sep, 5pm</td>
          <td>School Closed</td>
          <td>
            <p class="control">
              <Link to={'#'} class="button is-msa-brown card-btn">
                <span>View Full</span>
                <span class="icon is-small">
                  <FontAwesomeIcon icon="scroll" />
                </span>
              </Link>
            </p>
          </td>
        </tr>
        <tr class="">
          <td>monday. 13 sep, 5pm</td>
          <td>School Closed</td>
          <td>
            <p class="control">
              <Link to={'#'} class="button is-msa-brown card-btn">
                <span>View Full</span>
                <span class="icon is-small">
                  <FontAwesomeIcon icon="scroll" />
                </span>
              </Link>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Announcments;