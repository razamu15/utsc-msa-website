import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// markup
const Contact = (props) => {
  return (
    <section class="hero is-medium" id="contact">
      <div class="hero-heading" >
        <h1 class="title is-3 hero-heading-border">Connect</h1>
      </div>
      <div class="hero-body" style={{ padding: "4rem 1.5rem" }}>
        <div class="tile is-ancestor">

          <div class="tile is-parent">
            <div class="tile is-child  box">
              <iframe class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.4191989608066!2d-79.18904808513955!3d43.784913851922575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4da6e4e9ff46f%3A0x33a3b38f6482e129!2sStudent%20Centre%2C%201265%20Military%20Trail%2C%20Scarborough%2C%20ON%20M1C%201A4!5e0!3m2!1sen!2sca!4v1630102747244!5m2!1sen!2sca"
                width="600" height="450" style={{ bprder: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child box buttons are-medium contact-socials">
              <a href="mailto:something@gmail.com" class="button is-light is-primary is-outlined">
                <FontAwesomeIcon icon="envelope" />
              </a>
              <a href="https://www.facebook.com/msautsc" target="_blank" className="button is-light is-link is-outlined">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a href="https://www.instagram.com/msa_utsc/?hl=en" target="_blank" className="button is-light is-warning is-outlined">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="https://twitter.com/utscmsa?lang=en" target="_blank" className="button is-light is-info is-outlined">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="https://www.linkedin.com/in/msa-utsc-659914218/?originalSubdomain=ca" target="_blank" className="button is-light is-info is-outlined">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a href="https://www.tiktok.com/@msa_utsc?" target="_blank" className="button is-light is-danger is-outlined">
                <FontAwesomeIcon icon={['fab', 'tiktok']} />
              </a>
              
            </div>

            <div class="tile is-child box">
              <form name="contact" action="/" method="POST" data-netlify="true">
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <div class="control is-expanded has-icons-left">
                        <input name="name" class="input" type="text" placeholder="Jane Doe" />
                        <span class="icon is-small is-left">
                          <FontAwesomeIcon icon="user" />
                        </span>
                      </div>
                      <span class="help">
                        <strong>Name</strong>
                      </span>
                    </div>
                    <div class="field">
                      <div class="control is-expanded has-icons-left ">
                        <input name="email" class="input" type="text" placeholder="example@email.com" />
                        <span class="icon is-small is-left">
                          <FontAwesomeIcon icon="envelope" />
                        </span>

                      </div>
                      <span class="help">
                        <strong>Email</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <textarea class="textarea" placeholder="Textarea" name="message"></textarea>
                  </div>
                  <span class="help">
                    <strong>Message</strong>
                  </span>
                </div>
                <div class="field">
                  <div class="control ">
                    <button type="submit" class="button submit-button">
                      Submit&nbsp;&nbsp;
                        <FontAwesomeIcon icon="paper-plane" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
