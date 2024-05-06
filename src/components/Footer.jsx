import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

  return (
    <footer className="bg-gray-700 text-white max-w-screen-xl mx-auto text-center py-4">
      &copy; {currentYear} Your Property Listing. All rights reserved.
    </footer>
  );
};

export default Footer;
