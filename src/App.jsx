import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Test from "./Test";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";


const App = () => {
  return <div>
  <Cursor/>
 <section id="Homepage"><Navbar/>
 <Hero/>
 </section>
  <section>
    <Parallax type="services"/>
  </section>
  <section id="Projects"><Services /></section>
  <section id="Portfolio">
  <Parallax type="portfolio" />
  </section>
  <Portfolio />
  
 
  <section id="Contact">
    <Contact/>
  </section>

{/*<Test />
<Test />
*/}


  </div>;
};

export default App;
