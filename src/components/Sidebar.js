import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaTachometerAlt, FaTasks, FaCalendarAlt, FaChartBar, FaTable } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="admin-header">
  <img src="https://i.pravatar.cc/30" alt="profile" style={{ borderRadius: '50%' }} />
  <h2 style={{ fontSize:25}}>Admin</h2>
</div>
      <nav>
       <Link to="/"><FaTachometerAlt /> Dashboard</Link>
<Link to="/kanban"><FaTasks /> Kanban</Link>
<Link to="/calendar"><FaCalendarAlt /> Calendar</Link>
<Link to="/charts"><FaChartBar /> Charts</Link>
<Link to="/table"><FaTable /> Table</Link>

      </nav>
    </div>
  );
}

export default Sidebar;
