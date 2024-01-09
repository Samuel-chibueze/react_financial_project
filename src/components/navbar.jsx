import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import image from "../images/logo_real.png";
import { AuthContext } from '../context/authcontext';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

     const { token } = useContext(AuthContext)

    const localtoken = localStorage.getItem('token') ? true : false

    return (
    
        <nav className={token?"hidden" :"bg-white text-[#A68DAD]  p-4 fixed top-0 left-0 w-full border-b-2 border-solid border-gray-200"}>
            <div className="container mx-auto flex items-center justify-between">
                <img className="w-[100px]" src={image} alt="" />

                <button
                    className="lg:hidden text-[#A68DAD]  focus:outline-none"
                    onClick={handleToggleMenu}
                >
                    &#9776;
                </button>

                <div className="hidden lg:flex space-x-4">
                    <NavLink to="/" className="hover:text-[#A68DAD] ">
                        Home
                    </NavLink>
                    <NavLink to="/" className="hover:text-[#A68DAD] ">
                        About
                    </NavLink>
                    <NavLink to="/" className="hover:text-[#A68DAD] ">
                        Contact
                    </NavLink>
                    <NavLink to="/" className="text-[#A68DAD] ">
                        Services
                    </NavLink>
                    <NavLink to="/signup" className="text-[#A68DAD] ">
                        Signup
                    </NavLink>
                    <NavLink to="/signin" className="text-[#A68DAD] ">
                        Signin
                    </NavLink>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden  black py-4">
                    <NavLink
                        to="/"
                        className="block py-2 px-4 hover:text-[#A68DAD] "
                        onClick={handleToggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="block py-2 px-4 hover:text-[#A68DAD] "
                        onClick={handleToggleMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="block py-2 px-4 hover:text-[#A68DAD] "
                        onClick={handleToggleMenu}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="block py-2 px-4 hover:text-[#A68DAD] "
                        onClick={handleToggleMenu}
                    >
                        Services
                    </NavLink>
                    <NavLink
                     to="/signup"
                     className="block py-2 px-4 hover:text-[#A68DAD] " 
                      onClick={handleToggleMenu}>
                        Signup
                    </NavLink>
                    <NavLink 
                    to="/signin" 
                    className="block py-2 px-4 hover:text-[#A68DAD] "
                      onClick={handleToggleMenu}>
                        Signin
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
