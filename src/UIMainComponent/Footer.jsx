// src/components/Footer.jsx
import React from "react";

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
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <i className="fab fa-twitter">ll</i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <i className="fab fa-facebook">jj</i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <i className="fab fa-instagram">ui</i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <i className="fab fa-linkedin">gh</i>
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