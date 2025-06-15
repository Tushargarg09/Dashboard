import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import './Charts.css';

const weeklyData = [
  { name: 'Mon', users: 10 },
  { name: 'Tue', users: 25 },
  { name: 'Wed', users: 20 },
  { name: 'Thu', users: 40 },
  { name: 'Fri', users: 35 },
  { name: 'Sat', users: 30 },
  { name: 'Sun', users: 45 },
];

const monthlyData = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 50 },
  { name: 'Mar', users: 80 },
  { name: 'Apr', users: 60 },
  { name: 'May', users: 90 },
];

const yearlyData = [
  { name: '2021', users: 250 },
  { name: '2022', users: 370 },
  { name: '2023', users: 500 },
  { name: '2024', users: 640 },
  { name: '2025', users: 780 },
];

function Charts() {
  const [filter, setFilter] = useState('month');

  const getData = () => {
    if (filter === 'week') return weeklyData;
    if (filter === 'year') return yearlyData;
    return monthlyData;
  };

  return (
    <div className="charts-page">
      <div className="charts-header">
        <h2>📈 User Analytics</h2>
        <select
          className="filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="chart-card">
        <h3>Bar Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={getData()} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Bar dataKey="users" fill="#4f46e5" radius={[6, 6, 0, 0]} isAnimationActive />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Line Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={getData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ r: 4 }}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
