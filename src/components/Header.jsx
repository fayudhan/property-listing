import React from "react";
import backgroundImage from "../assets/vidar-nordli-mathisen-vN01MT3NsDQ-unsplash.jpg"; // Ubah 'nama_gambar.jpg' sesuai dengan nama gambar Anda

const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-[30rem] relative max-w-screen-xl mx-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="absolute inset-0 flex items-start justify-center md:px-24 px-4 md:pt-16 flex-col gap-y-3">
        <h1 className="text-gray-900 text-5xl md:text-6xl font-bold leading-snug max-w-md lead">
          Peace, nature, and life.
        </h1>
        <h2 className="text-gray-900 text-lg font-semibold">
          Find your perfect property listings.
        </h2>
      </div>
    </header>
  );
};

export default Header;
