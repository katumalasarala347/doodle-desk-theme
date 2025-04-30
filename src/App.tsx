import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThemeSelector } from './components/ThemeSelector';

function App() {
  return (
    <Router>
      <div className="bg-background text-text font-main min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/themes" element={<ThemeSelector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
