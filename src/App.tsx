import "./App.css";
import Hero from "./components/Hero";
import ExpertSection from "./components/Expert";
import StackedCards from "./components/StackedCards";
import StackedTitle from "./components/StackedTitle";
import Standards from "./components/Standards";
import ProductsAndServices from "./components/ProductsAndServices";

function App() {
  return (
    <div >
      <Hero />
      <ExpertSection />
      <StackedTitle />
      <StackedCards />
      <Standards />
      <ProductsAndServices />
      <div className="h-screen bg-gray-500 w-full" />

    </div>
  );
}

export default App;
