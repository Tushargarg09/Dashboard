import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import Calendar from './pages/Calendar';
import Charts from './pages/Charts';
import Table from './pages/Table';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Sidebar />
        <div className="main">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
