import { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import Hero from "./components/Hero";
import ExpertSection from "./components/Expert";
import StackedCards from "./components/StackedCards";
import StackedTitle from "./components/StackedTitle";

function App() {
  return (
    <div >
      <Hero />
      <ExpertSection />
      <StackedTitle />
      <StackedCards />
      <div className="h-screen bg-gray-500 w-full" />

    </div>
  );
}

export default App;
