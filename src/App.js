import React from 'react';
import './App.css'; 
import Faculty from './components/Faculty';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Header from './components/Header';
import Student from './components/Student';

function App() {
  const facultyData = [
    { id: 'F01', name: 'MURALI MOHAN', department: 'CSIT', designation: 'PHD' },
    { id: 'F002', name: 'RAVITEJA', department: 'CSE', designation: 'PHD' },
    { id: 'F003', name: 'SURESH REDDY', department: 'CSE', designation: 'PHD' },
    { id: 'F004', name: 'RAGAVENDRA SAI', department: 'CSE', designation: 'PHD' },
    { id: 'F005', name: 'VEERASWAMI', department: 'CSE', designation: 'PHD' },
  ];

  const courses = [
    { code: '23CS06EF', ltp: '0-0-6-4', name: 'MERN STACK WEB DEVELOPMENT', credits: 4 },
    { code: '23SDCS11R', ltp: '0-0-2-4', name: 'LINUX ADMINISTRATION', credits: 2 },
    { code: '23CS2103R', ltp: '3-0-2-4', name: 'ADVANCED OBJECT ORIENTED PROGRAMMING', credits: 5 },
  ];

  const studentData = [
    { id: '2300033213', name: 'GANDHAM BHANU PRAKASH', year: 2024, department: 'Computer Science' },
    { id: '2300032523', name: 'JAGAN MOHAN REDDY', year: 2024, department: 'Computer Science' },
  ];

  return (
    <div>
      <Header title="Koneru Lakshmaiah Education Foundation (Deemed to be University)" />
      <Faculty facultyData={facultyData} />
      <Courses courses={courses} />
      <Student studentData={studentData} />
      <Footer />
    </div>
  );
}

export default App;
