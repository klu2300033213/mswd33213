
import React from 'react';

function Courses({ courses }) {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.code}>
          <p>Course Code: {course.code}</p>
          <p>L-T-P-S: {course.ltp}</p>
          <p>Course Name: {course.name}</p>
          <p>Credits: {course.credits}</p>
        </li>
      ))}
    </ul>
  );
}

export default Courses;
