export default function aboutMe() {
  return (
    <section class="blog-posts">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="columns featured-post is-multiline">
              <div class="column is-12 post">
                <article id="aboutMe" class="columns featured">
                  <div class="column is-7 post-img ">
                    <img src="/images/pic.jpg" alt="" />
                  </div>
                  <div class="column is-5 featured-content va">
                    <div>
                      <h3 class="heading post-category">
                        A small introduction
                      </h3>
                      <h1 class="title post-title">About me</h1>
                      <p class="paragraph">
                        Hi, I'm Arnaud, a recent graduate in a web and mobile
                        Development technique and I just started my bachelor
                        Degree in Automated Manufactoring Engineering. My
                        background is mostly in fullstack Development in a
                        variety of languages and framework but I'm always eager
                        to learn more. I opted for this major because I'm
                        passionate about implementing the power of well designed
                        and optimized software in an industrial context and
                        sensing the effects my software has on production and
                        the life of the operator.
                      </p>
                      <br />
                      <a
                        href="https://www.linkedin.com/in/arnaudthébergemandeville/"
                        class="button is-primary"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <hr />
            <div class="columns is-multiline">
              <div class="column post is-6">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img">
                    <img src="/images/finkl.png" alt="Featured Image" />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Intership #1</h3>
                    <h1 class="title post-title pd-5">
                      Full Stack developer <br />
                    </h1>
                    <p class="paragraph">
                      My first internship in an industrial It setting. I worked
                      on an employee onboarding system which follows the
                      onboarding process of each employee and send notification
                      to the interested party. It also manage every document
                      necessary for the integration of every type of employee.
                    </p>
                    <br />
                  </div>
                </article>
              </div>
              <div class="column post is-6" id="Projects">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img">
                    <img src="/images/bba.jpeg" alt="Featured Image" />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Intership #2</h3>
                    <h1 class="title post-title">
                      programmer-analyst : Operational Technology and
                      Infrastructure
                    </h1>
                    <p class="paragraph">
                      I worked as an intern at BBA consultant and had to
                      opportunity to be implicated in a large variety of
                      projects. Whether internal projects such as a plc and HMI
                      page generator, or external. For instances, I worked for a
                      well known dairy product manufacturer to migrate the OT
                      workstation and for a mine to maintain their downtime
                      manager.
                    </p>
                    <br />
                  </div>
                </article>
              </div>
              <div class="column post is-4">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img-project">
                    <img src="/images/mfca_logo.png" alt="Featured Image" />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Project</h3>
                    <h1 class="title post-title">MFCA cost analysis</h1>
                    <p class="paragraph">
                      This project made in collaboration with the Cttei was
                      intended to help local industry to evaluate the real price
                      of their wasted matetial to optimize both the ecological
                      impact and profits of the company.
                    </p>
                    <br />
                    <a
                      href="https://vimeo.com/571786933/cfdf4ba07e"
                      class="button is-primary"
                      target="_blank"
                    >
                      Presentation (In french)
                    </a>
                  </div>
                </article>
              </div>
              <div class="column post is-4">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img-project">
                    <img
                      src="/images/hydra.png"
                      height="100%"
                      width="100%"
                      alt="Featured Image"
                    />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Project</h3>
                    <h1 class="title post-title">Hydra</h1>
                    <p class="paragraph">
                      This student project consist of an intelligent aeroponic
                      greenhouse floating on the Richelieu river. It involved
                      multiple sensor, 2 arduino, a FIPY, a webapp and an API.
                    </p>
                    <br />
                    <a
                      href="https://github.com/hubertmathieu/hydra-project"
                      class="button is-primary"
                      target="_blank"
                    >
                      Github Links
                    </a>
                  </div>
                </article>
              </div>
              <div class="column post is-4">
                <article class="columns is-multiline">
                  <div class="column is-12 post-img-project">
                    <img
                      src="/images/shadohod.jpg"
                      height="100%"
                      width="100%"
                      alt="Featured Image"
                    />
                  </div>
                  <div class="column is-12 featured-content ">
                    <h3 class="heading post-category">Project</h3>
                    <h1 class="title post-title">Shagohod</h1>
                    <p class="paragraph">
                      A small project to help a friend for his final projet in
                      mechanical engineering technical degree. In summary it is
                      a small web based controller for a remote control tank.
                      Involving a swift made app and a Django server on a
                      raspberry Pi.
                    </p>
                    <br />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
