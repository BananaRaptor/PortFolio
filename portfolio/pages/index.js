import Layout from "../components/layout/layout";
import BackgroundVideo from "../components/backgroundVideo";
import AboutMe from "../components/aboutMe";
import Footer from "../components/footer";

function home() {
  return (
    <Layout>
      <BackgroundVideo />
      <AboutMe />
      <Footer />
    </Layout>
  );
}

export default home;
