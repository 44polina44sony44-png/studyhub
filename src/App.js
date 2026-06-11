import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Course from './pages/Course';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Contacts from './pages/Contacts';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;