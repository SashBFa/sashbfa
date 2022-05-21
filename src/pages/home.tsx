import { ParallaxHead } from "../components/animation/ParallaxHead";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "../components/Header";

const Home = () => {
  return (
    <ParallaxProvider>
      <ParallaxHead />
      <Header />
    </ParallaxProvider>
  );
};

export default Home;
