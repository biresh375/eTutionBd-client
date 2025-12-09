import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C5E66] text-gray-300 py-12 px-6 mt-10">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left gap-10 px-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">eTuitionBD</h2>
          <p className="text-sm leading-6">
            Your trusted online learning platform. Get quality education from
            the best instructors anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-1 w-fit">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-1 w-fit">
            Support
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-1 w-fit">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl justify-center md:justify-start">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>

          <p className="text-sm mt-4">Email: support@etuitionbd.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-10 border-t border-gray-800 pt-5 text-sm text-gray-400">
        © {new Date().getFullYear()} eTuitionBD — All Rights Reserved.
      </div>
    </footer>
  );
}
