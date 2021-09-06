import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/global.css";
import "../utils/font-awesome"

const Layout = (props) => {
  let burger = React.useRef(null);
  let menu = React.useRef(null);

  function toggleMenu() {
    burger.current.classList.toggle('is-active');
    menu.current.classList.toggle('is-active');
  }

  return (
    <main>
      <section className={`hero is-${props.size}`} id="landing-hero">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="home.html">
                  <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
                </a>
                <span ref={burger} onClick={toggleMenu} className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div ref={menu} id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item has-dropdown is-hoverable">
                    <a className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="sitemap" />
                      </span>
                      <span>About Us</span>
                    </a>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="file-alt" />
                          </span>
                          <span>Mission & Values</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="university" />
                          </span>
                          <span>Constitution</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="smile" />
                          </span>
                          <span>Meet the Team</span>
                        </a>
                      </span>
                    </div>
                  </span>
                  <span className="navbar-item has-dropdown is-hoverable">
                    <a className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="kaaba" />
                      </span>
                      <span>Islamic Resources</span>
                    </a>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="pray" />
                          </span>
                          <span>Jummuah</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="mosque" />
                          </span>
                          <span>Praying Areas</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="utensils" />
                          </span>
                          <span>Halal Food</span>
                        </a>
                      </span>
                    </div>
                  </span>
                  <span className="navbar-item has-dropdown is-hoverable">
                    <a className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="users" />
                      </span>
                      <span>Programs & Events</span>
                    </a>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="bullhorn" />
                          </span>
                          <span>Announcements</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="calendar-alt" />
                          </span>
                          <span>Events</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="users" />
                          </span>
                          <span>Programs</span>
                        </a>
                      </span>
                    </div>
                  </span>
                  <span className="navbar-item has-dropdown is-hoverable">
                    <a className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="link" />
                      </span>
                      <span>Connect</span>
                    </a>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <a className="button" href="#" style={{ padding: "25px 15px" }}>
                          <span className="icon">
                            <FontAwesomeIcon icon="hands-helping" />
                          </span>
                          <span>Get <br /> Involved</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a className="button" href="#">
                          <span className="icon">
                            <FontAwesomeIcon icon="phone-square" />
                          </span>
                          <span>Contact</span>
                        </a>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title has-text-white">
                {props.heading}
              </h1>
              <h2 className="subtitle">
                {props.subHeading}
              </h2>
              {props.socials ?
                <div className="social-media">
                  <a href="https://facebook.com" target="_blank" className="button is-light is-large">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </a>
                  <a href="https://instagram.com" target="_blank" className="button is-light is-large">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                  <a href="https://twitter.com" target="_blank" className="button is-light is-large">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
                </div>
                : false
              }
            </div>
          </div>
        </div>
      </section>

      {props.children}

      <footer className="footer">
        <div className="container">
          <div className="columns">

            <div className="column is-4">
              <h1 className="bd-footer-title title is-4">
                Muslim Student Association
              </h1>
              <h4 className="">
                <strong>Adderess: </strong> 1265 Military Trail, Scarborough, ON
              </h4>
              <br />
              <h4 className="">
                <strong>Email: </strong> <a href="mailto:">msa@email.com</a>
              </h4>

            </div>

            <div className="column is-5">
              <h4 className="bd-footer-title">
                <strong>Links</strong>
              </h4>

              <p>
                <a href="https://bulma.io/blog">
                  <span className="icon">
                    <i className="fa fa-superpowers"></i>
                  </span>
                  <span><strong>Examples</strong> &nbsp; - extra text if needed</span>
                </a>
              </p>

              <p>
                <a href="https://bulma.io/blog">
                  <span className="icon">
                    <i className="fa fa-superpowers"></i>
                  </span>
                  <span><strong>Examples</strong>&nbsp; - extra text if needed</span>
                </a>
              </p>

              <p>
                <a href="https://bulma.io/blog">
                  <span className="icon">
                    <i className="fa fa-superpowers"></i>
                  </span>
                  <span><strong>Examples</strong>&nbsp; </span>
                </a>
              </p>

              <p>
                <a href="https://bulma.io/blog">
                  <span className="icon">
                    <i className="fa fa-superpowers"></i>
                  </span>
                  <span><strong>Examples</strong>&nbsp; - less extra </span>
                </a>
              </p>

            </div>

            <div className="column is-3">
              <h4 className="bd-footer-title">
                <strong>Newsletter</strong>
              </h4>
              <h4 className="">
                some stuff about a newsletter, add a good amount of extra text here to make it lokk whaever
              </h4>

              <span className="button is-link card-btn" data-target="modal-image">Sign up
                &rarr;</span>

            </div>
          </div>

        </div>
      </footer>
    </main>
  )
}

export default Layout;