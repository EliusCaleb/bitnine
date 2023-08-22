import React,{useState} from "react";
import { BsBrowserFirefox } from "react-icons/bs";
import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="bg-gray-900 py-4">
//     <div className="container mx-auto flex justify-between items-center">
//       <div className="flex items-center">
//         <BsBrowserFirefox size={45} className="text-blue-800" />
//         <h1 className="ml-2 text-white font-semibold text-xl">bitnine</h1>
//       </div>
//       <div className="flex space-x-4">
//         <NavLink
//           to="/home"
//           className="text-white hover:text-yellow-500 transition-colors duration-300"
//         >
//           PRODUCT
//         </NavLink>
//         <NavLink
//           to="/user-cases"
//           className="text-white hover:text-yellow-500 transition-colors duration-300"
//         >
//           USER CASES
//         </NavLink>
//         <NavLink
//           to="/services"
//           className="text-white hover:text-yellow-500 transition-colors duration-300"
//         >
//           SERVICES
//         </NavLink>
//         <NavLink
//           to="/resources"
//           className="text-white hover:text-yellow-500 transition-colors duration-300"
//         >
//           RESOURCES
//         </NavLink>
//         <NavLink
//           to="/blog"
//           className="text-white hover:text-yellow-500 transition-colors duration-300"
//         >
//           BLOG
//         </NavLink>
//         <NavLink
//           to="/company"
//           className="text-white hover:text-yellow-500 transition-colors duration-300"
//         >
//           COMPANY
//         </NavLink>
//         <NavLink
//           to="/ir"
//           className="text-white hover:text-yellow-500 transition-colors duration-300"
//         >
//           IR
//         </NavLink>
//       </div>
//     </div>
//   </div>
//   );
// };



const Navbar = () => {
    
  
    return (
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <BsBrowserFirefox size={45} className="text-blue-800" />
            <h1 className="ml-2 text-white font-semibold text-xl">bitnine</h1>
          </div>
          <div className="flex space-x-4">
          <div className="nav-link-wrapper">
            <NavLink
              to="/home"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              PRODUCT
            </NavLink>
            <div className="select-wrapper">
              <select className="hidden">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
            <NavLink
              to="/user-cases"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              USER CASES
            </NavLink>
            <NavLink
              to="/services"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/resources"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              RESOURCES
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              BLOG
            </NavLink>
            <NavLink
              to="/company"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              COMPANY
            </NavLink>
            <NavLink
              to="/ir"
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              IR
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  



export default Navbar;
