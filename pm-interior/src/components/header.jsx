import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../assets/PM_Interior_Logo1.png";

export default function Header() {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => setIsOpen(!isOpen);

     const linkClasses = ({ isActive }) =>
          `transition ${isActive
               ? "text-secondary border-b-2 border-secondary"
               : "text-primary hover:text-secondary"
          }`;

     return (
          <header className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
               <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                    <NavLink to="/">
                         <div className="text-2xl flex items-center gap-2 font-bold text-primary">
                              <img src={Logo} alt="PM Interior Logo" className="h-14" />
                              <span>
                                   PM <span className="text-secondary">Interior</span>
                              </span>
                         </div>
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 font-medium">
                         <NavLink to="/" className={linkClasses}>
                              Home
                         </NavLink>
                         <NavLink to="/about" className={linkClasses}>
                              About Us
                         </NavLink>
                         <NavLink to="/products" className={linkClasses}>
                              Products
                         </NavLink>
                         <NavLink to="/gallery" className={linkClasses}>
                              Gallery
                         </NavLink>
                         <NavLink to="/contact" className={linkClasses}>
                              Contact Us
                         </NavLink>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                         className="md:hidden text-primary text-2xl"
                         onClick={toggleMenu}
                    >
                         {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
               </div>

               {/* Mobile Menu */}
               {isOpen && (
                    <div className="md:hidden bg-white shadow-md">
                         <nav className="flex flex-col items-center space-y-4 py-6 font-medium">
                              <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
                                   Home
                              </NavLink>
                              <NavLink to="/about" className={linkClasses} onClick={toggleMenu}>
                                   About Us
                              </NavLink>
                              <NavLink to="/products" className={linkClasses} onClick={toggleMenu}>
                                   Products
                              </NavLink>
                              <NavLink to="/gallery" className={linkClasses} onClick={toggleMenu}>
                                   Gallery
                              </NavLink>
                              <NavLink to="/contact" className={linkClasses} onClick={toggleMenu}>
                                   Contact Us
                              </NavLink>
                         </nav>
                    </div>
               )}
          </header>
     );
}
