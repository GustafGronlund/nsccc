import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {
  HomePage,
  GalleryPage,
  AboutPage,
  RegistrationPage,
  ContactPage,
} from './pages';
import { Header, Footer } from './components';
import './index.css';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        lenis.start();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, lenis]);

  return null;
};

function App() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

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
        <ScrollToTopOnRouteChange />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/contact"
            element={<ContactPage isFooterVisible={isFooterVisible} />}
          />
        </Routes>
        <Footer onToggleVisibility={setIsFooterVisible} />
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
