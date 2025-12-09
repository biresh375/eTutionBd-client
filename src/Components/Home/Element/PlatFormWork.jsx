import React from "react";
import { FaBookOpen, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";

const PlatFormWork = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold text-[#03373d] mb-10">
          How The Platform Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-white shadow rounded-xl space-y-4">
            <FaBookOpen className="text-4xl text-teal-600 mx-auto" />
            <h3 className="font-bold text-xl">1. Create Request</h3>
            <p className="text-gray-600">
              Post your tuition requirement easily within minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white shadow rounded-xl space-y-4">
            <FaChalkboardTeacher className="text-4xl text-teal-600 mx-auto" />
            <h3 className="font-bold text-xl">2. Get Tutor Offers</h3>
            <p className="text-gray-600">
              Tutors will contact you based on your requirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white shadow rounded-xl space-y-4">
            <FaCheckCircle className="text-4xl text-teal-600 mx-auto" />
            <h3 className="font-bold text-xl">3. Hire the Best Tutor</h3>
            <p className="text-gray-600">
              Compare and choose the best tutor for your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatFormWork;
