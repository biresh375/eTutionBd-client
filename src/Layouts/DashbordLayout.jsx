import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const DashbordLayout = () => {
  //   const user = null;
  const user = {
    name: "biresh paul",
    photoURL:
      "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/476799375_1818882882297475_4306958886144675378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pzuOR4NwPRAQ7kNvwERGgsr&_nc_oc=AdkA8UaXVEkus1u1U6TrTEr1pauSPk3G8Aq1q9s3_hWGsYbrtWFFr1ZPoVRuF3QJdEE&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=JbyBaI5xX0-EaWsToBz9fQ&oh=00_AfmmXjscq4x_YLNZI4zRBgW3J34kM9w5B38X8Mj2Kml2jw&oe=693D9B1B",
    email: "palbiresh@gmail.com",
    Role: "student",
  };

  const Logout = () => {
    console.log("clicked logour");
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-linear-to-l from-teal-400 to-[#12828f] ">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost text-white"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4 "
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className=" flex justify-between items-center w-full ">
            <div>
              <h1 className="px-4 text-white">user Dashbord</h1>
            </div>
            <div className="relative group cursor-pointer mr-10">
              <img
                src={user.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full border shadow"
              />
              <div className="absolute right-0  w-48 bg-white shadow-lg rounded-xl p-3 hidden group-hover:block">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p className="text-gray-800 text-sm font-bold">{user.Role}</p>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <button onClick={Logout} className="btn  btn-error w-full mt-2">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">Page Content</div>
        {/* here using outlet */}
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-[#03373d] is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow text-white">
            {/* List item */}
            <Link to={"/"}>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-white hover:text-[#03373d]"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-white hover:text-[#03373d]"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-white hover:text-[#03373d]"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;
