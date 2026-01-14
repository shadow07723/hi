// src/components/Footer.jsx
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-8 border-t-2 border-gray-700  ">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">MyWebsite</h2>
            <p className="text-sm mt-2">
              Building modern web experiences with React & Tailwind.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <ul>
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
            <ul>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="hover:scale-110 text-blue-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/share/1TSYsrfdfJ/" aria-label="Facebook" className="hover:scale-110 text-blue-500 bg-white rounded-full border-2 border-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/sagar_roy_012?igsh=cmtqa241aDQ5NzJ6" aria-label="Instagram" className="hover:scale-110 text-red-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sagar-ray-87647b19a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="hover:scale-110 text-blue-500 bg-white text-2xl">
              <GrLinkedin />

            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;