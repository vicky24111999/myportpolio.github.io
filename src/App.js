import "./App.css";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import BgImage from "./assets/img/parallex/background.webp";
import TitleMessage from "./components/title-message/title.message";
import MyCarousal from "./components/my-carosole/my-carosole";
import Experience from "./pages/experience/experience.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Container from "react-bootstrap/Container";
import About from "./pages/about/about";
import Slide from "react-reveal/Slide";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import Skills from "./pages/skills/skills.component";
import "./App.css";
//components
import MyNavbar from "./components/mynavbar.com/mynavbar";
const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <MyCarousal />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          //bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          bgImage={BgImage}
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
