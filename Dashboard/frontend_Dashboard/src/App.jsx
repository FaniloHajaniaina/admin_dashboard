import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: '250px' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/profile" element={<h2>Profile Page</h2>} />
          <Route path="/messages" element={<h2>Messages Page</h2>} />
          <Route path="/settings" element={<h2>Settings Page</h2>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;