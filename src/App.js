import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Producto from "./components/Producto/Producto";
import Footer from "./components/Footer/Footer";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <Servicios/>
        <Producto/>
        <Contacto/>
        <ScrollToTop smooth top="20"/>
        <Footer/>
      </div>

  );
}

export default App;
