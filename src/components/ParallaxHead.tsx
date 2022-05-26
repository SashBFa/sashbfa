import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const ParallaxHead = () => {
  const background: BannerLayer = {
    image: "./assets/images/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: "200px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <img
          src="./assets/images/Sash.png"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: "./assets/images/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(14, 62, 151, 0.5) 50%, #121212)",
        }}
      />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      style={{ height: "100vh" }}
    />
  );
};
