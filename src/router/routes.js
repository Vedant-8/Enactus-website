import About from "../pages/About";
import Contact from "../pages/Contact";
import EventDetail from "../pages/EventDetail";
import Events from "../pages/Events";
import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";
import Projects from "../pages/Projects";
import Team from "../pages/Team";
import React from "react";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/team" element={<Team />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:eventId" element={<EventDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
