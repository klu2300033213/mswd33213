
import React from 'react';

function Footer() {
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`;

  return (
    <footer>
      <h5>&copy; All rights reserved - {formattedDate}</h5>
    </footer>
  );
}

export default Footer;
