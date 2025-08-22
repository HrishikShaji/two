import "./App.css";
import Hero from "./components/Hero";
import ExpertSection from "./components/Expert";
import StackedCards from "./components/StackedCards";
import StackedTitle from "./components/StackedTitle";
import Standards from "./components/Standards";
import ProductsAndServices from "./components/ProductsAndServices";
import { VerticalSlider } from "./components/VerticalSlider";
import Contact from "./components/Contact";

function App() {
  return (
    <div >
      <Hero />
      <ExpertSection />
      <StackedTitle />
      <StackedCards />
      <Standards />
      <ProductsAndServices />
      <VerticalSlider />
      <Contact />

    </div>
  );
}

export default App;
