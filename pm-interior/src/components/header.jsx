import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/PM_Interior_Logo1.png";

export default function Header() {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => setIsOpen(!isOpen);

     return (
          <header className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
               <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl flex justify-between items-center gap-2 font-bold text-[#84302f]">
                         <img src={Logo} className="h-14"/>
                         <span>PM <span className="text-[#c35244]">Interiors</span></span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 text-[#84302f] font-medium">
                         <a href="#home" className="hover:text-[#c35244] transition">Home</a>
                         <a href="#about" className="hover:text-[#c35244] transition">About Us</a>
                         <a href="#products" className="hover:text-[#c35244] transition">Products</a>
                         <a href="#gallery" className="hover:text-[#c35244] transition">Gallery</a>
                         <a href="#contact" className="hover:text-[#c35244] transition">Contact Us</a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                         className="md:hidden text-[#84302f] text-2xl"
                         onClick={toggleMenu}
                    >
                         {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
               </div>

               {/* Mobile Menu */}
               {isOpen && (
                    <div className="md:hidden bg-white shadow-md">
                         <nav className="flex flex-col items-center space-y-4 py-6 text-[#84302f] font-medium">
                              <a href="#home" className="hover:text-[#c35244]" onClick={toggleMenu}>Home</a>
                              <a href="#about" className="hover:text-[#c35244]" onClick={toggleMenu}>About Us</a>
                              <a href="#products" className="hover:text-[#c35244]" onClick={toggleMenu}>Products</a>
                              <a href="#gallery" className="hover:text-[#c35244]" onClick={toggleMenu}>Gallery</a>
                              <a href="#contact" className="hover:text-[#c35244]" onClick={toggleMenu}>Contact Us</a>
                         </nav>
                    </div>
               )}
          </header>
     );
}
