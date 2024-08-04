
import React from 'react';
import download1 from '../components/download1.png'; // Adjust the path as necessary

function Header({ title }) {
  return (
    <header>
      <img src={download1} alt="download" />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
