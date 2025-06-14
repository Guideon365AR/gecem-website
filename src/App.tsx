import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Team from './components/Sections/Team';
import Activities from './components/Sections/Activities';
import Contact from './components/Sections/Contact';

// Activity Pages
import Reuniones from './pages/activities/Reuniones';
import Proyectos from './pages/activities/Proyectos';
import Jornadas from './pages/activities/Jornadas';
import Recursos from './pages/activities/Recursos';
import Casos from './pages/activities/Casos';
import Capacitaciones from './pages/activities/Capacitaciones';

function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-700">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Team />
        <Activities />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reuniones" element={<Reuniones />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/jornadas" element={<Jornadas />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
      </Routes>
    </Router>
  );
}

export default App;