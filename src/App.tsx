import { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import Hero from "./components/Hero";
import ExpertSection from "./components/Expert";
import StackedCards from "./components/StackedCards";

function App() {
  return (
    <div >
      <Hero />
      <ExpertSection />
      <StackedCards />
    </div>
  );
}

export default App;
