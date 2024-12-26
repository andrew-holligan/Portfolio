import { ThemeProvider } from "./contexts/ThemeProvider";

import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";

function AppContent() {
  return (
    <>
      <Navbar />

      <main className="container">
        <About />
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
