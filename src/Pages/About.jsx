import AboutBanner from "../Components/AboutBanner";
import AboutSubscribe from "../Components/AboutSubscribe";
import Container from "../Components/Container";
import OurPerformance from "../Components/OurPerformance";

const About = () => {
  return (
    <>
      <Container>
        <AboutBanner />
        <OurPerformance />
        <AboutSubscribe />
      </Container>
    </>
  );
};

export default About;
