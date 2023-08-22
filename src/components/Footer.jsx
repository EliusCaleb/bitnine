import React from "react";
import {
  FaYoutube,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaBloggerB,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6">
      <FooterLinks />

      <footer className="flex justify-between  ml-5 bg-gray-900 text-white py-6">
        <p className="text-gray-500 text-center mb-4">
          &copy; 2023 by Bitnine Global Inc. All Rights Reserved.
        </p>

        <div className="flex justify-center space-x-4">
        
          <Link
            to="#"
            className="bg-gradient-to-b from-white to-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500"
          >
            <FaGithub className="text-xl" />
          </Link>

          <Link
            to="#"
            className="bg-gradient-to-b from-white to-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500"
          >
            <FaStackOverflow className="text-xl" />
          </Link>

          <Link
            to="#"
            className="bg-gradient-to-b from-white to-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500"
          >
            <FaYoutube className="text-xl" />
          </Link>

          <Link
            to="#"
            className="bg-gradient-to-b from-white to-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500"
          >
            <FaTwitter className="text-xl" />
          </Link>

          <Link
            to="#"
            className="bg-gradient-to-b from-white to-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500"
          >
            <FaLinkedinIn className="text-xl" />
          </Link>

          <Link
            to="#"
            className="bg-gradient-to-b from-white to-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500"
          >
            <FaFacebook className="text-xl" />
          </Link>

          <Link
            to="#"
            className="bg-gradient-to-b from-white to-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-500"
          >
            <FaBloggerB className="text-xl" />
          </Link>
        </div>

        <div className="flex justify-center mt-4">
          <button className="text-gray-900 bg-white font-semibold px-4 py-2 mr-4 rounded-full hover:bg-gray-200 transition duration-300">
            Apache AGE
          </button>
          <button className="text-gray-900 bg-white font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
            CONTACT
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
