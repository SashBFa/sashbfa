import { ParallaxHead } from "../components/animation/ParallaxHead";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "../components/projects/Projects";

const Home = () => {
  return (
    <ParallaxProvider>
      <ParallaxHead />
      <Projects />
    </ParallaxProvider>
  );
};

export default Home;
