import styled from "styled-components";
import { Element } from "react-scroll";
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  max-height: 100%;
`;

export default function indexPage() {
  return (
    <>
      <div className=" has-text-centered">
        <section class="hero is-video-heigth BackgroundGrid">
          <StyledVideo autoPlay loop muted>
            <source
              src="images/background.mp4"
              className="BackgroundVideo"
              type="video/mp4"
            />
          </StyledVideo>
        </section>
      </div>
      <div class="overlay">
        <h1 id="Home" className="title is-1 has-text-white has-text-centered">
          Arnaud Théberge-Mandeville
        </h1>
        <br />
        <h2 className="subtitle is-2 has-text-white has-text-centered">
          Web and Mobile Development Technician
        </h2>
        <h2 className="subtitle is-2 has-text-white has-text-centered">
          Bachelor Of Automated Manufactoring Engineering
        </h2>
      </div>
    </>
  );
}
