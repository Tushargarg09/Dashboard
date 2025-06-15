import React from 'react';
import './Table.css'; 

const data = [
  { name: "Tushar", age: 21, role: "Developer" },
  { name: "Mayank", age: 17, role: "Designer" },
];

function Table() {
  return (
    <div className="page">
      <h2>Team Members</h2>

      <div className="table-container">
        <div style={{ marginBottom: '12px', color: '#666' }}>
          Showing <strong>{data.length}</strong> members
        </div>

        <table>
          <thead>
            <tr><th>Name</th><th>Age</th><th>Role</th></tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td style={{ color: '#000' }}>{item.name}</td>
                <td style={{ color: '#000' }}>{item.age}</td>
                <td style={{ color: '#000' }}>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
