import React, { useState } from 'react';
import { FaBars, FaPlus, FaMinus } from 'react-icons/fa';

const TrackClaimStatus = () => {
  const [openSection, setOpenSection] = useState({
    online: true,
    transfer: true,
    auto: true,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-3 shadow-md fixed top-32 left-0 w-full z-50min-h-screen bg-white px-2 py-6">
      {/* Section 1: Online Claim Status */}
      <div className="border border-gray-400 rounded-md shadow-lg mb-4">
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-md">
          <div className="flex items-center space-x-2">
            <FaBars />
            <span className="font-semibold text-blue-800">Online Claim Status</span>
          </div>
          <button onClick={() => toggleSection('online')}>
            {openSection.online ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        {openSection.online && (
          <div className="overflow-x-auto p-4 bg-white">
            <table className="w-full text-sm text-left border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">TRACKING ID</th>
                  <th className="px-4 py-2 border">FORM TYPE</th>
                  <th className="px-4 py-2 border">SUBMITTED AT PORTAL</th>
                  <th className="px-4 py-2 border">SENT TO FIELD OFFICE</th>
                  <th className="px-4 py-2 border">CURRENT STATUS</th>
                  <th className="px-4 py-2 border">VIEW PDF</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-2 border">20250601012345001</td>
                  <td className="px-4 py-2 border">Form-19</td>
                  <td className="px-4 py-2 border">31-May-2025 02:45 PM</td>
                  <td className="px-4 py-2 border">31-May-2025 06:00 PM</td>
                  <td className="px-4 py-2 border text-yellow-600">Pending Verification</td>
                  <td className="px-4 py-2 border text-blue-600 underline cursor-pointer">⬇</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2 border">20250601123456002</td>
                  <td className="px-4 py-2 border">Form-10C</td>
                  <td className="px-4 py-2 border">30-May-2025 09:15 AM</td>
                  <td className="px-4 py-2 border">30-May-2025 11:00 AM</td>
                  <td className="px-4 py-2 border text-green-700">Claim Settled</td>
                  <td className="px-4 py-2 border text-blue-600 underline cursor-pointer">⬇</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Section 2: Transfer Claim Status */}
      <div className="border border-gray-400 rounded-md shadow-lg mb-4">
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-md">
          <div className="flex items-center space-x-2">
            <FaBars />
            <span className="font-semibold text-blue-800">Transfer Claim Status</span>
          </div>
          <button onClick={() => toggleSection('transfer')}>
            {openSection.transfer ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        {openSection.transfer && (
          <div className="bg-red-100 text-red-700 p-4 border-t border-gray-300">
            <div className="flex items-center">
              <span className="mr-2">⚠</span> No Claim Details Found
            </div>
          </div>
        )}
      </div>

      {/* Section 3: Stop Auto Initiated Claim Cases */}
      <div className="border border-gray-400 rounded-md shadow-lg">
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-md">
          <div className="flex items-center space-x-2">
            <FaBars />
            <span className="font-semibold text-blue-800">Stop Auto Initiated Claim Cases</span>
          </div>
          <button onClick={() => toggleSection('auto')}>
            {openSection.auto ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        {openSection.auto && (
          <div className="bg-red-100 text-red-700 p-4 border-t border-gray-300">
            <div className="flex items-center">
              <span className="mr-2">⚠</span> No Auto Initiated Claims Found.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackClaimStatus;
