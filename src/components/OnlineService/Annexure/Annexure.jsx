import React, { useState } from 'react';
import { FaBars, FaPlus, FaMinus } from 'react-icons/fa';

const Annexure = () => {
  const [openSection, setOpenSection] = useState({
    annexure: true,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-3 shadow-md fixed top-22 left-0 w-full h-[80vh] overflow-auto bg-white px-2 py-6">
      {/* Download Annexure K Toolbar */}
      <div className="border border-gray-400 rounded-md shadow-lg">
        <div className="flex items-center justify-between bg-blue-100 px-4 py-2 rounded-t-md">
          <div className="flex items-center space-x-2 text-blue-900">
            <FaBars />
            <span className="font-semibold">Download Annexure K</span>
          </div>
          <button onClick={() => toggleSection('annexure')}>
            {openSection.annexure ? <FaMinus /> : <FaPlus />}
          </button>
        </div>

        {openSection.annexure && (
          <div className="bg-red-100 text-red-700 p-4 border-t border-gray-300">
            <div className="flex items-center">
              <span className="mr-2">⚠</span> No Annexure K available for download.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Annexure;
