import React from "react";
import {
  AiOutlineSearch,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { PiMediumLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (   
  <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
      <div className="ml-4 mr-4">
        <select className="border p-2 rounded">
          <option value="english">English</option>
          <option value="korean">Korean</option>
        </select>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border rounded">
          <input
            type="text"
            placeholder="SEARCH"
            className="border-r-0 p-2 rounded-l"
          />
          <AiOutlineSearch className="p-2" />
        </div>
        <div className="ml-4">
          <Link to="/contact" className="text-white">
            CONTACT
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-yellow-600">
            <AiOutlineGithub  size={15} className="github-icon w-8 h-8" />
          </Link>
        </div>
        <div className="ml-4 ">
          <Link to="" className="text-white ">
            <AiOutlineYoutube  size={15} className="youtube-icon w-8 h-8"  />
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-white">
            <AiOutlineLinkedin  size={15} className="linkedin-icon w-8 h-8" />
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-white">
            <AiOutlineFacebook  size={15} className="facebook-icon w-8 h-8" />
          </Link>
        </div>
        <div className="ml-4">
          <Link to="" className="text-white">
            <PiMediumLogo className="medium-icon w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
