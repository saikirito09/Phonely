import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Scheduling from './pages/Scheduling';
import Support from './pages/Support';
import NavBar from './components/NavBar';
// import './App.css';

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
