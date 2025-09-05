import "./App.css";
import { Suspense, lazy } from "react";
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
        <Suspense
          fallback={
            <div className="text-center py-16 text-white">Loading...</div>
          }
        >
          <Experience />
        </Suspense>
        <AboutUs />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
