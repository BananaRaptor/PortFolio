import Head from "next/head";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelopeOpenText,
  faBook,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;
// import Link from "next/link";

export default function layout({ children }) {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 70 ||
            document.documentElement.scrollTop > 70)
        ) {
          console.log("aaaa");
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 2 &&
          document.documentElement.scrollTop < 2
        ) {
          console.log("b");
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Arnaud Théberge-Mandeville</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/images/icon.png"></link>
      </Head>
      {isShrunk && (
        <section className={classNames("hero is-info")}>
          <div className="hero-head">
            <nav className={classNames("navbar")}>
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="../">
                    <img src="/images/logo.png" alt="Logo" />
                  </a>
                  <a
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarHeader"
                    onClick={() => {
                      var burger = document.querySelector(".burger");
                      var nav = document.querySelector("#navbarMenu");
                      burger.classList.toggle("is-active");
                      nav.classList.toggle("is-active");
                    }}
                  >
                    <span />
                    <span />
                    <span />
                  </a>
                </div>

                <div
                  id="navbarMenu"
                  className="navbar-menu"
                >
                  <div className="navbar-end hamburger-fixed">
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="#Home">
                        <span className="icon">
                          <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span>Home</span>
                      </a>
                    </span>
                    <span className="navbar-item">
                      <a
                        className="button is-white is-outlined"
                        href="#aboutMe"
                      >
                        <span className="icon">
                          <FontAwesomeIcon icon={faProjectDiagram} />
                          <i className="fa fa-superpowers"></i>
                        </span>
                        <span>About Me</span>
                      </a>
                    </span>
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="#">
                        <span className="icon">
                          <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span>Projects</span>
                      </a>
                    </span>
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="#">
                        <span className="icon">
                          <FontAwesomeIcon icon={faEnvelopeOpenText} />
                        </span>
                        <span>Contact Me</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
      )}
      <section
        id="home"
        className={classNames("hero is-info", {
          "is-fixed-top is-inversed": isShrunk,
        })}
      >
        <div className="hero-head">
          <nav
            className={classNames("navbar", {
              "is-fixed-top is-inversed": isShrunk,
            })}
          >
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <img src="/images/logo.png" alt="Logo" />
                </a>
                <a
                  role="button"
                  className={classNames("navbar-burger burger", {
                    "is-fixed-top is-inversed": isShrunk,
                  })}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarHeader"
                  onClick={() => {
                    var burger = document.querySelector(".burger");
                    var nav = document.querySelector("#navbarMenu");
                    burger.classList.toggle("is-active");
                    nav.classList.toggle("is-active");
                  }}
                >
                  <span />
                  <span />
                  <span />
                </a>
              </div>

              <div
                id="navbarMenu"
                className={classNames("navbar-menu", {
                  "is-fixed-top is-inversed": isShrunk,
                })}
              >
                <div
                  className={classNames("navbar-end hamburger-fixed", {
                    "is-fixed-top is-inversed": isShrunk,
                  })}
                >
                  <span className="navbar-item">
                    <a
                      className="button is-white is-outlined"
                      onClick={() => {
                        const anchor = document.querySelector("#home");
                        anchor.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faHome} />
                      </span>
                      <span>Home</span>
                    </a>
                  </span>
                  <span className="navbar-item">
                    <a
                      className="button is-white is-outlined"
                      onClick={() => {
                        const anchor = document.querySelector("#aboutMe");
                        anchor.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faProjectDiagram} />
                        <i className="fa fa-superpowers"></i>
                      </span>
                      <span>About Me</span>
                    </a>
                  </span>
                  <span className="navbar-item">
                    <a
                      className="button is-white is-outlined"
                      onClick={() => {
                        const anchor = document.querySelector("#Projects");
                        anchor.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faBook} />
                      </span>
                      <span>Projects</span>
                    </a>
                  </span>
                  <span className="navbar-item">
                    <a
                      className="button is-white is-outlined"
                      onClick={() => {
                        const anchor = document.querySelector("#Footer");
                        anchor.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                      </span>
                      <span>Contact Me</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div className="">{children}</div>
    </>
  );
}
