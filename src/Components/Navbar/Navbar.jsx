import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logoimage from "../../assets/book.png";
import UseAuth from "../../Hooks/UseAuth";
import Profile from "../Shared/Profile/Profile";

export default function Navbar() {
  const { user } = UseAuth();
  const [open, setOpen] = useState(false);

  const LogOut = () => {
    console.log("clicked logour");
  };
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tuitions", path: "/tuitions" },
    { name: "Tutors", path: "/tutors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const PrivateLinks = user && <>Dashbord</>;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="  mx-auto flex items-center justify-between px-10 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoimage}
            alt="E Tuition Bd Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-[#03373d] tracking-wide">
            eTuitionBD
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[15px] font-medium transition duration-200 ${
                  isActive
                    ? "text-[#03373d]"
                    : "text-gray-600 hover:text-[#03373d]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to={"/dashbord"}
            className={({ isActive }) =>
              `text-[15px] font-medium transition duration-200 ${
                isActive
                  ? "text-[#03373d]"
                  : "text-gray-600 hover:text-[#03373d]"
              }`
            }
          >
            {PrivateLinks}
          </NavLink>

          {/* Auth Buttons */}
          {/* Auth Buttons */}
          {user ? (
            // <div className="relative group cursor-pointer">
            //   <img
            //     src={user.photoURL}
            //     alt="profile"
            //     className="w-10 h-10 rounded-full border shadow"
            //   />
            //   <div className="absolute right-0  w-48 bg-white shadow-lg rounded-xl p-3 hidden group-hover:block">
            //     <p className="font-semibold text-gray-800">{user.name}</p>
            //     <p className="text-gray-800 text-sm font-bold">{user.Role}</p>
            //     <p className="text-gray-500 text-sm">{user.email}</p>
            //     <button onClick={LogOut} className="btn  btn-error w-full mt-2">
            //       Logout
            //     </button>
            //   </div>
            // </div>
            <Profile></Profile>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-[#03373d] text-[#03373d] hover:bg-[#03373d] hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-[#03373d] text-white hover:bg-[#055058] transition"
              >
                Register
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[#03373d]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6  gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-[16px] font-medium border-b pb-2 transition ${
                  isActive
                    ? "text-[#03373d]"
                    : "text-gray-700 hover:text-[#03373d]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/dashbord"
            className={({ isActive }) =>
              `text-[16px] font-medium border-b pb-2 transition ${
                isActive
                  ? "text-[#03373d]"
                  : "text-gray-700 hover:text-[#03373d]"
              }`
            }
          >
            {PrivateLinks}
          </NavLink>

          {/* Mobile Auth Buttons */}
          {/* Mobile Auth Buttons */}
          {user ? (
            <div className="flex flex-col items-center gap-1 mt-1">
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-12 h-12 rounded-full border shadow"
              />
              <p className="font-semibold text-gray-800">{user?.displayName}</p>
              <p className="text-gray-800 text-sm font-bold">{user?.Role}</p>
              <p className="text-gray-500 text-sm">{user?.email}</p>
              <button
                onClick={() => {
                  LogOut();
                  setOpen(false);
                }}
                className="w-full text-center px-4 py-2 rounded-lg bg-red-500 text-white mb-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-4">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="w-full text-center px-4 py-2 rounded-lg border border-[#03373d] text-[#03373d] hover:bg-[#03373d] hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="w-full text-center px-4 py-2 rounded-lg bg-[#03373d] text-white hover:bg-[#055058] transition mb-2"
              >
                Register
              </Link>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}
