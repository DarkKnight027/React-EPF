import React from 'react';

const JointDeclaration = () => {
  return (
    <div className=" p-3 shadow-md fixed top-24 left-0 w-full z-50 "> {/* Margin top applied to page level */}
      <div className="border rounded-md shadow-sm">
        {/* Header */}
        <div className="border-b border-yellow-400 px-4 py-2 flex justify-between items-center bg-white">
          <span className="text-[15px] font-semibold text-[#7a5900]">Joint Declaration</span>
          <a href="#" className="text-blue-600 text-sm hover:underline flex items-center">
            Help
            <span className="ml-1 text-xs">❓</span>
          </a>
        </div>

        {/* Body */}
        <div className="bg-gray-50 py-6 px-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium whitespace-nowrap">Select Member Id:</label>
              <select className="border border-blue-300 rounded px-3 py-[6px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>------------------Select------------------</option>
              </select>
              <button className="bg-blue-800 text-white text-sm px-4 py-1 rounded hover:bg-blue-700">
                Get Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JointDeclaration;
