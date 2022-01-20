import "normalize.css"; /* http://nicolasgallagher.com/about-normalize-css/ */
import "./styles.css";
import Footer from "./core/components/Footer";
import { SpaceProvider } from "./core/providers/space.provider";

export default () => {
  return (
    <SpaceProvider>
      <Footer />
    </SpaceProvider>
  );
};
