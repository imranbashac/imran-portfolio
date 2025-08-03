import DarkModeToggle from "./DarkModeToggle";
import Contact from "./Contact";
import Projects from "./Projects";
import AboutAndSkills from "./AboutAndSkills";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <>
      <DarkModeToggle />

      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Imran Basha
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-cyan-400 mb-8">
          <Typewriter
            words={[
              "Senior IT Support",
              "AWS & Linux Admin",
              "WordPress & OpenCart",
              "Zid & Salla Expert",
              "CCTV & Network Setup",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <div className="flex gap-6">
          <a
            href="/Imran_Basha_CV.pdf"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold shadow-lg transition"
            download
          >
            📄 View Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg font-semibold transition"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>

      {/* Other Sections */}
      <AboutAndSkills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
