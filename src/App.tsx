import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  GalleryPage,
  AboutPage,
  RegistrationPage,
  ContactPage,
} from './pages';
import { Header } from './components';
import './index.css';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
