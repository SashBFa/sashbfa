import { ParallaxHead } from "../components/ParallaxHead";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  return (
    <div>
      <ParallaxProvider>
        <ParallaxHead />
      </ParallaxProvider>
    </div>
  );
};

export default Home;
