import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  GalleryPage,
  AboutPage,
  RegistrationPage,
  ContactPage,
} from "./pages";
import { Header } from "./components";
import "./index.css";

function App() {
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
