import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../../assets/hero.jpg";

import {
  FaSearch,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaStar,
  FaBookOpen,
} from "react-icons/fa";
import LatestTution from "./LatestTution";

export default function HomePage() {
  return (
    <div className=" bg-white">
      <section className="bg-linear-to-r from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#03373d]">
              Find The Best <span className="text-teal-600">Tutor</span> Near
              You
            </h1>
            <p className="text-gray-600">
              eTuitionBD helps students find experienced tutors for any class or
              subject.
            </p>

            {/* SEARCH BAR */}
            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered w-full md:w-96"
                placeholder="Search by subject or area..."
              />
              <button className="btn btn-primary">
                <FaSearch /> Search
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (ANIMATION 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImg}
              alt="hero"
              className="w-full border-2 border-[#03373d]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
