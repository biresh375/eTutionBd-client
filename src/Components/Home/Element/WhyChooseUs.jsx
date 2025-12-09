import React from "react";
import { FaCheckCircle, FaStar, FaUserGraduate } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-[#03373d] mb-10 text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-xl">
              <FaUserGraduate className="text-3xl text-teal-600 mb-3" />
              <h3 className="font-bold text-xl">Experienced Tutors</h3>
              <p className="text-gray-600">
                All tutors are verified and skilled in their subjects.
              </p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <FaStar className="text-3xl text-teal-600 mb-3" />
              <h3 className="font-bold text-xl">Top Ratings</h3>
              <p className="text-gray-600">
                Students rate tutors to help you choose confidently.
              </p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <FaCheckCircle className="text-3xl text-teal-600 mb-3" />
              <h3 className="font-bold text-xl">Reliable & Secure</h3>
              <p className="text-gray-600">
                We ensure safe communication & verified tutor profiles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
