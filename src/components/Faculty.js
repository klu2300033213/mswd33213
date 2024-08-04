
import React from 'react';

function Faculty({ facultyData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Faculty ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        {facultyData.map((faculty) => (
          <tr key={faculty.id}>
            <td>{faculty.id}</td>
            <td>{faculty.name}</td>
            <td>{faculty.department}</td>
            <td>{faculty.designation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Faculty;
