import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { Navigate, useNavigate } from "react-router";

const Profile = () => {
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();
  const Logout = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="relative group cursor-pointer mr-10">
        <img
          src={user?.photoURL}
          alt="profile"
          className="w-10 h-10 rounded-full border shadow"
        />
        <div className="absolute right-0  w-48 bg-white shadow-lg rounded-xl p-3 hidden group-hover:block">
          <p className="font-semibold text-gray-800">{user?.name}</p>
          <p className="text-gray-800 text-sm font-bold">{user?.Role}</p>
          <p className="text-gray-500 text-sm">{user?.email}</p>
          <button onClick={Logout} className="btn  btn-error w-full mt-2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
