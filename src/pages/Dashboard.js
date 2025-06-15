import React from 'react';
import './Dashboard.css'; // Create this for custom styling
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 700 },
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h2>Welcome to the Dashboard</h2>

      <div className="stats-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>1,245</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>$56,300</p>
        </div>
        <div className="card">
          <h3>Tasks Pending</h3>
          <p>8</p>
        </div>
        <div className="card">
          <h3>Meetings Today</h3>
          <p>3</p>
        </div>
      </div>
      <div className="recent-activity">
  <h3>Recent Activity</h3>
  <ul>
    <li>✅ Completed Kanban task</li>
    <li>📅 Scheduled a new meeting</li>
    <li>📈 User growth increased 10%</li>
  </ul>
</div>


      <div className="dashboard-charts">
        <h3>User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} isAnimationActive={true} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
