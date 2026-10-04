import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import MockTest from './pages/MockTest';
import Notes from './pages/Notes';
import TestHistory from './pages/TestHistory';
import About from './pages/About';
import { QuizProvider } from './context/QuizContext';

export default function App() {
  return (
    <QuizProvider>
      <div className="app-shell">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mock-test" element={<MockTest />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/history" element={<TestHistory />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </QuizProvider>
  );
}
