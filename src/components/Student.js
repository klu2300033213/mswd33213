
import React from 'react';

function Student({ studentData }) {
  return (
    <div>
      {studentData.map((student) => (
        <div className="student-card" key={student.id}>
          <h3>ID: {student.id}</h3>
          <p>Name: {student.name}</p>
          <p>Year: {student.year}</p>
          <p>Department: {student.department}</p>
        </div>
      ))}
    </div>
  );
}

export default Student;
