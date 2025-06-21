import { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import Hero from "./components/Hero";
import ExpertSection from "./components/Expert";

function App() {
  return (
    <div >
      <Hero />
      <ExpertSection />
    </div>
  );
}

export default App;
