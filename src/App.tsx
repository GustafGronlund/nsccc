import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  GalleryPage,
  AboutPage,
  RegistrationPage,
  ContactPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
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
