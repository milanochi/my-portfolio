import "./App.css";
import { lazy } from "react";
// import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import { UserContext } from "./contexts/UserContext";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Experience = lazy(() => import("./components/Experience"));

function App() {
  return (
    <>
      {/* <Header /> */}
      <UserContext.Provider value={"Ochi Portfolio"}>
        <HeroSection />
        <Projects />
        <Experience />
        <AboutUs />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
