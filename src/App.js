import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Tools from "./components/Tools";

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <div className="bg-[#2ea673]" >
      <Body />
      </div>
      <About/>
      <Services/>
      <Tools/>
      <div className="bg-[#2ea673]" >
      <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
