import React, { useState } from "react";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define your navigation links here
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" },
  ];

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        Menu
      </button>
      {isHovered && (
        <div className="absolute z-10 mt-2 py-2 w-48 bg-white border rounded-lg shadow-lg">
          <select className="w-full focus:outline-none">
            {navLinks.map((link, index) => (
              <option key={index} value={link.url}>
                {link.text}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Navigation;