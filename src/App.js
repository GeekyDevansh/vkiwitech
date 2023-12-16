import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Tools from "./components/Tools";
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <Header />
      <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{duration:1}} >
      <Slider/>
      </motion.div>
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
