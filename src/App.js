
import Header from "./components/Header";
import About from "./components/About"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionStyle = {
  marginBottom: '50px', // Adjust the value to increase or decrease the space between sections
 };
 const App = () => {
  return (
 <div>
  <Header></Header>
 <div style={sectionStyle}>
 <About />
 </div>
 <div style={sectionStyle}>
 <Profile />
 </div>
 <div style={sectionStyle}>
 <Skills />
 </div>
 <div style={sectionStyle}>
 <Projects />
 </div>
 <div style={sectionStyle}>
 <Resume />
 </div>
 <div style={sectionStyle}>
 <Contact />
 </div>
 <div style={sectionStyle}>
 <Footer />
 </div>
 </div>
  );
 };

export default App;
