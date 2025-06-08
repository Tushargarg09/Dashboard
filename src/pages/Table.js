import React from 'react';

const data = [
  { name: "Tushar", age: 21, role: "Developer" },
  { name: "Mayank", age: 17, role: "Designer" },
];

function Table() {
  return (
    <div className="page">
      <h2>Team Members</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Age</th><th>Role</th></tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
