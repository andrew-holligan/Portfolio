import { ThemeProvider } from "./contexts/ThemeProvider";

import Navbar from "./components/navbar/Navbar";
import About from "./views/about/About";
import Projects from "./views/projects/Projects";
import Journey from "./views/journey/Journey";
import Contact from "./views/contact/Contact";

function AppContent() {
  return (
    <>
      <Navbar />

      <main className="container">
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
