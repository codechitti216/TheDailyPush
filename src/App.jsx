/*
 * Research Portfolio Template
 * © 2025 Surya GS Chitti
 * 
 * This file is part of the Research Portfolio Template.
 * Template design and original implementation by Surya GS Chitti.
 * 
 * Attribution required when using this template.
 * GitHub: https://github.com/codechitti216/TheDailyPush
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TemplateIntegrity from './components/TemplateIntegrity';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Garden from './pages/Garden';
import GardenDetail from './pages/GardenDetail';
import InnerCircle from './pages/InnerCircle';
import CV from './pages/CV';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <TemplateIntegrity />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/garden/:id" element={<GardenDetail />} />
          <Route path="/inner-circle" element={<InnerCircle />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
