import "./App.css";
import About from "./components/about/About";
import ArrowTop from "./components/arrow-top/ArrowTop";
import Consultation from "./components/consultation/Consultation";
import Experience from "./components/experience/Experinece";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Consultation />
      <ArrowTop />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
