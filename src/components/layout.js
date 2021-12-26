import * as React from "react";
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from "gatsby"

import "../styles/global.css";
import "../utils/font-awesome"

const Layout = (props) => {
  let burger = React.useRef(null);
  let menu = React.useRef(null);
  const data = useStaticQuery(graphql`
    query layoutQuery {
      logo: contentfulAsset(title: {eq: "MSA logo"}) {
        gatsbyImageData(height: 100, layout: FIXED, aspectRatio:1.3)
        file {
          url
        }
      }
      back: contentfulAsset(title: {eq: "Landing background"}) {
        file {
          url
        }
      }
    }
  `)

  //document.documentElement.style.setProperty('--background-img', `url(${data.back.file.url})`)

  function toggleMenu() {
    burger.current.classList.toggle('is-active');
    menu.current.classList.toggle('is-active');
  }

  return (
    <main id="page-root" style={{'--background-img': `url(${data.back.file.url})`}}>
      <section className={`hero is-${props.size}`} id="landing-hero">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  <img id="logo" src={data.logo.file.url} alt="Logo" style={{width: '70px', height:"70px"}} />
                </Link>
                <span ref={burger} onClick={toggleMenu} className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div ref={menu} id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item has-dropdown is-hoverable middle">
                    <Link to="/about-us" className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="sitemap" />
                      </span>
                      <span>About Us</span>
                    </Link>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <Link to="/about-us/#mission" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="file-alt" />
                          </span>
                          <span>Mission & Values</span>
                        </Link>
                      </span>
                      <span className="navbar-item">
                        <Link to="/about-us/#constitution" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="university" />
                          </span>
                          <span>Constitution</span>
                        </Link>
                      </span>
                      <span className="navbar-item">
                        <Link to="/about-us/#team-banner" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="smile" />
                          </span>
                          <span>Meet the Team</span>
                        </Link>
                      </span>
                    </div>
                  </span>
                  <span className="navbar-item has-dropdown is-hoverable middle">
                    <Link to="/resources" className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="kaaba" />
                      </span>
                      <span>Islamic Resources</span>
                    </Link>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <Link to="/resources/#jummuah" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="pray" />
                          </span>
                          <span>Jummuah</span>
                        </Link>
                      </span>
                      <span className="navbar-item">
                        <Link to="/resources/#praying-areas" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="mosque" />
                          </span>
                          <span>Praying Areas</span>
                        </Link>
                      </span>
                      {/* <span className="navbar-item">
                        <Link to="/resources/#halal-food" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="utensils" />
                          </span>
                          <span>Halal Food</span>
                        </Link>
                      </span> */}
                    </div>
                  </span>
                  <span className="navbar-item has-dropdown is-hoverable middle">
                    <Link to="/progs-events" className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="users" />
                      </span>
                      <span>Programs & Events</span>
                    </Link>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <Link to="/progs-events/#announcements" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="bullhorn" />
                          </span>
                          <span>Announcements</span>
                        </Link>
                      </span>
                      <span className="navbar-item">
                        <Link to="/progs-events/#events" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="calendar-alt" />
                          </span>
                          <span>Events</span>
                        </Link>
                      </span>
                      <span className="navbar-item">
                        <Link to="/progs-events/#programs" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="users" />
                          </span>
                          <span>Programs</span>
                        </Link>
                      </span>
                    </div>
                  </span>
                  <span className="navbar-item has-dropdown is-hoverable middle">
                    <Link to="/connect" className="button navbar-link is-arrowless">
                      <span className="icon">
                        <FontAwesomeIcon icon="link" />
                      </span>
                      <span>Connect</span>
                    </Link>

                    <div className="navbar-dropdown ">
                      <span className="navbar-item">
                        <Link to="/connect/#involvement" className="button" style={{ padding: "20px 15px" }}>
                          <span className="icon">
                            <FontAwesomeIcon icon="hands-helping" />
                          </span>
                          <span>Get <br /> Involved</span>
                        </Link>
                      </span>
                      <span className="navbar-item">
                        <Link to="/connect/#contact" className="button">
                          <span className="icon">
                            <FontAwesomeIcon icon="phone-square" />
                          </span>
                          <span>Contact</span>
                        </Link>
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
            <div className="column is-6 is-offset-3  has-text-centered">
              {props.home ?
                <>
                  <h1 className="title has-text-white" style={{margin: '0px'}}>
                    WELCOME TO
                  </h1>
                  <h1 className="title has-text-white" style={{fontSize: '7rem', fontWeight: '900'}}>
                    MSA
                  </h1>
                  <h1 className="title has-text-white" style={{margin: '0px',fontWeight: '1000', fontSize:'3rem', textAlign: 'center'}}>
                    <span style={{letterSpacing: '2rem'}}>UTS</span>C
                  </h1>
                  <h2 className="subtitle">
                  </h2>
                </> :
                <>
                  <h1 className="title has-text-white">
                    {props.heading}
                  </h1>
                  <h2 className="subtitle">
                    {props.subHeading === "" ? <><br/><br/><br/></>: props.subHeading}
                  </h2>
                </>
              }

              {props.socials ?
                <div className="social-media">
                  <a href="https://www.facebook.com/msautsc" target="_blank" className="button is-light is-large">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </a>
                  <a href="https://www.instagram.com/msa_utsc/?hl=en" target="_blank" className="button is-light is-large">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                  <a href="https://twitter.com/utscmsa?lang=en" target="_blank" className="button is-light is-large">
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
                <strong>Address: </strong> 1265 Military Trail, Scarborough, ON
              </h4>
              <br />
              <h4 className="">
                <strong>Email: </strong> <a href="mailto:utscmsa1@gmail.com">utscmsa1@gmail.com</a>
              </h4>

            </div>

            <div className="column is-5">
            </div>

            <div className="column is-3">
              <h4 className="bd-footer-title">
                <strong>Newsletter</strong>
              </h4>
              <h4 className="">
                Join our newsletter to stay up-to-date with the MSA!
              </h4>

              <Link to={''} className="button is-link is-msa-blue card-btn" data-target="modal-image">Sign up
                &rarr;</Link>

            </div>
          </div>

        </div>
      </footer>
    </main>
  )
}

export default Layout;