import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Parallax } from 'react-parallax';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Contact from './pages/Contact';
import background from './assets/background.jpg';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Parallax bgImage={background} strength={500}>
        <div className="parallax-container">
          <Sidebar />
          <main>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={300}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/photography" element={<Photography />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </main>
        </div>
      </Parallax>
    </div>
  );
};

const WrappedApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default WrappedApp;
