import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-white bg-opacity-50 shadow-md">
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
    </header>
  );
};

export default Header;
