import React, {  useState } from "react";
// import axios from "axios";
const LatestTutiors = () => {
  const [tutors, setTutors] = useState([]);
    // useEffect(() => {
    //   axios.get("/api/tutors?limit=6").then((res) => setTutors(res.data));
    // }, []);
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-[#03373d]">
            Latest Tutors
          </h2>

          {tutors.length === 0 ? (
            <p>Loading tutors...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {tutors.map((tutor) => (
                <div key={tutor._id} className="card bg-white shadow p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={tutor.photo || "https://i.ibb.co/d0YM7kH/user.png"}
                      className="w-14 h-14 rounded-full"
                      alt=""
                    />
                    <div>
                      <h3 className="font-bold">{tutor.name}</h3>
                      <p className="text-sm text-gray-600">{tutor.subject}</p>
                    </div>
                  </div>

                  <p className="text-sm mt-2">{tutor.location}</p>
                  <p className="mt-1 flex items-center gap-1 text-yellow-500">
                    <FaStar /> {tutor.rating || 4.5}
                  </p>

                  <button className="btn btn-primary btn-sm mt-4">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LatestTutiors;
