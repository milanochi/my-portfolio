/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./App.css";
// import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import { UserContext } from "./contexts/UserContext";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      {/* <Header /> */}
      <UserContext.Provider value={"Ochi Portfolio"}>
        <HeroSection />
        <AboutUs />
      </UserContext.Provider>
    </>
  );
}

export default App;
