import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
      <Hireme />
      <footer className="p-3 bg-primaryLinear text-center">
        <h6 className="mb-3">CARBO</h6>
        <p> All CopyRights Reserved 2024</p>
      </footer>
    </div>
  );
};

export default App;
