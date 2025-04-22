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
import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8,
        lerp: 0.05,
        smoothWheel: true,
        wheelMultiplier: 0.7,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      }}
    >
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
    </ReactLenis>
  );
}

export default App;
