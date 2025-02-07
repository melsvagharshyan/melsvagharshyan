import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experinece";
import Header from "./components/header/Header";
// import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="w-full">
      <Header />
      <About />
      {/* <Skills /> */}
      <Experience />
    </div>
  );
}

export default App;
