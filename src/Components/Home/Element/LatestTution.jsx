import React, { useState } from "react";
// import axios from "axios";

const LatestTution = () => {
  const [tuitions, setTuitions] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/tuitions?limit=6").then((res) => setTuitions(res.data));}, []);

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-6 text-[#03373d]">
          Latest Tuition Posts
        </h2>

        {tuitions.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {tuitions.map((t) => (
              <div key={t._id} className="card bg-white shadow p-5">
                <h3 className="font-bold text-lg">{t.subject}</h3>
                <p className="text-sm text-gray-600">{t.area}</p>
                <p className="text-sm font-semibold text-teal-700">
                  Tk {t.salary}
                </p>
                <button className="btn btn-outline btn-sm mt-3">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestTution;
