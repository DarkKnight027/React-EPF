// src/components/Header.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../LoginForm/userSlice'; // adjust if path differs
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const uan = useSelector((state) => state.user.uan);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // ✅ Navigate to login page
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-between items-center px-4 py-4 bg-white bg-opacity-50 shadow-md">
      {/* Left section */}
      <div className="flex items-center">
        <img
          src="https://www.insightsonindia.com/wp-content/uploads/2024/12/employees.jpg"
          alt="EPFO Logo"
          className="h-12 mr-3"
        />
        <div>
          <h1 className="text-lg font-bold text-teal-900">
            EMPLOYEES' PROVIDENT FUND ORGANISATION, INDIA
          </h1>
          <p className="text-sm text-gray-600">
            MINISTRY OF LABOUR & EMPLOYMENT, GOVERNMENT OF INDIA
          </p>
        </div>
      </div>

      {/* Right section */}
      {isLoggedIn ? (
        <div className="flex flex-col items-end space-y-1 text-sm">
          {/* UAN and Name */}
          <div className="bg-green-600 px-3 py-1 rounded-md text-xs font-semibold text-white">
            UAN : {uan} / {username.toUpperCase()}
          </div>

          {/* Font Size Buttons and Logout */}
          <div className="flex items-center gap-2">
            <button className="bg-[#A67C52] text-white px-1.5 py-0.5 rounded text-xs">-A</button>
            <button className="bg-[#A67C52] text-white px-1.5 py-0.5 rounded text-xs">A</button>
            <button className="bg-[#A67C52] text-white px-1.5 py-0.5 rounded text-xs">A+</button>
            <button
              onClick={handleLogout}
              className="text-blue-600 underline text-xs ml-2"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="text-center text-sm">
            <span className="block text-[16px] text-[#048282] font-semibold">
              Universal Account Number <br /> (UAN)
            </span>
            <br />
            <span className="block text-[18px] text-[#C1622D] font-semibold">
              MEMBER e-SEWA
            </span>
          </div>
          <div className="hidden sm:block">
            <img
              src="https://www.insightsonindia.com/wp-content/uploads/2024/12/employees.jpg"
              alt="G20 Logo"
              className="h-12 mr-2"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
