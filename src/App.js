import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <div className="bg-[#2ea673]" >
      <Body />
      </div>
      <About/>
      <Services/>
      <div className="bg-[#2ea673]" >
      <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
