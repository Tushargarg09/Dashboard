import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/kanban">Kanban</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/table">Table</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
