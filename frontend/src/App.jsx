import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyJourney from "./pages/MyJourney";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<MyJourney />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;