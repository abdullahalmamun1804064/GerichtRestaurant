import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./pages/AboutUS/AboutUs";
import { Blog } from "./pages/Blog/Blog";
import { BookTable } from "./pages/BookTable/BookTable";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Home } from "./pages/Home/Home";
import { Landing } from "./pages/Landing/Landing";
import { Login } from "./pages/Login/Login";
import { Registation } from "./pages/Registation/Registation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registation" element={<Registation />} />
        <Route exact path="/booktable" element={<BookTable />} />
      </Routes>
    </Router>
  );
}
