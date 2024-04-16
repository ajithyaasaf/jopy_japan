import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jopy. All rights reserved.</p>
        <p>1234 Jopy Street, Tokyo, Japan</p>
        <p>Phone: +81 123 456 789</p>
        <p>Email: info@jopy.com</p>
      </div>
    </footer>
  );
};

export default Footer;
