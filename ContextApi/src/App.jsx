import BioProvider from "./index";
import Home from "./Home";
import About from "./About";
function App() {
  return (
  <BioProvider>
    <Home/>
    <About/>
  </BioProvider>
  );
}

export default App;
