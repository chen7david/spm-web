import "./App.css";
import { About } from "./components/About";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import { Testimonials } from "./components/Testimonials";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
