import Destinations from "./components/destinations";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
