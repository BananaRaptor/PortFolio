import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <footer class="footer mt-5" id="Footer">
      <div class="content has-text-centered footer-container">
        <h1>
          <strong>Contact me !</strong>
        </h1>
        <div class="columns">
          <div class="column">
            <a
              className="is-black footer-icon"
              target="_blank"
              href="mailto::arnaudthebergemandeville.pro@gmail.com"
            >
              <span className="icon footer-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="is-black footer-icon">E-mail</span>
            </a>
          </div>
          <div class="column">
            {" "}
            <a
              className="is-black footer-icon"
              target="_blank"
              href="https://eportfolio.etsmtl.ca/Portfolio/Clef/59WM7HbXvD0TgLr2JXBK"
            >
              <span className="icon footer-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="is-black footer-icon">University Portfolio</span>
            </a>
          </div>
          <div class="column">
            <a
              className="is-black footer-icon"
              target="_blank"
              href="https://www.linkedin.com/in/arnaudth%C3%A9bergemandeville/"
            >
              <span className="icon footer-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span className="is-black footer-icon">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
