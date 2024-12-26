import { ThemeProvider } from "./contexts/ThemeProvider";

import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function AppContent() {
  return (
    <>
      <Navbar />

      <main className="container">
        <About />
        <Projects />
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
