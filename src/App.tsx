import "./App.css";
import About from "./components/about/About";
import ArrowTop from "./components/arrow-top/ArrowTop";
import Experience from "./components/experience/Experinece";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="w-full">
      <Header />
      <About />
      <Skills />
      <Experience />
      <ArrowTop />
    </div>
  );
}

export default App;
