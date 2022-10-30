import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import WorksPage from "./pages/WorksPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="works" element={<WorksPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
