import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import '../Components/header.css'

export default function Header() {
  // Removed Google Translate code 

  return (
    <header className="shadow-md sticky top-0 bg-green-100 border-b border-gray-300 z-50">
      <nav className="container mx-auto flex justify-between items-center py-3">
        {/* Logo and Website Name */}
        <Link to="/" className="flex items-center">
          <img
            src="public/images/logo.jpeg"
            alt="Logo"
            className="rounded-full w-12 h-12 object-cover"
          />
          <span className="text-2xl font-semibold text-green-700">
            AgriSite
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 ${
                  isActive ? "text-green-700" : "text-gray-700"
                } hover:text-green-700`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-4 ${
                  isActive ? "text-green-700" : "text-gray-700"
                } hover:text-green-700`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/farmer"
              className={({ isActive }) =>
                `block py-2 px-4 ${
                  isActive ? "text-green-700" : "text-gray-700"
                } hover:text-green-700`
              }
            >
              Farmers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buyers"
              className={({ isActive }) =>
                `block py-2 px-4 ${
                  isActive ? "text-green-700" : "text-gray-700"
                } hover:text-green-700`
              }
            >
              Buyers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/realtimeprice"
              className={({ isActive }) =>
                `block py-2 px-4 ${
                  isActive ? "text-green-700" : "text-gray-700"
                } hover:text-green-700`
              }
            >
              Real-Time Price
            </NavLink>
          </li>
        </ul>

        {/* Removed the Google Translate section */}

        {/* Profile Icon */}
        <Menu>
          <MenuButton as="button" className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </MenuButton>
          <MenuList className="mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <MenuItem>
              <Link to="/login" className="block w-full text-sm text-gray-700 hover:text-green-700">
                Login
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup" className="block w-full text-sm text-gray-700 hover:text-green-700">
                Signup
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/create-account" className="block w-full text-sm text-gray-700 hover:text-green-700">
                Create Account
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/logout" className="block w-full text-sm text-gray-700 hover:text-green-700">
                Logout
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
}
