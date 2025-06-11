import React, { useState, useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';
const JointDeclaration = () => {
  const [data, setData] = useState(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState('');
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    fetch('/personalInfo.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleGetDetails = () => {
    const selected = data?.companies.find((c) => c.id === selectedCompanyId);
    setCompanyDetails(selected);
  };

  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-3 shadow-md mt-12 w-full">
      <div className="border rounded-md shadow-sm bg-white">
        {/* Header */}
        <div className="border-b border-yellow-400 px-4 py-2 flex justify-between items-center">
          <span className="text-[15px] font-semibold text-[#7a5900]">Joint Declaration</span>
          <a href="#" className="text-blue-600 text-sm hover:underline flex items-center">
            Help <span className="ml-1 text-xs">❓</span>
          </a>
        </div>

        {/* Body */}
        <div className="bg-gray-50 py-6 px-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium whitespace-nowrap">Select Member Id:</label>
              <select
                value={selectedCompanyId}
                onChange={(e) => setSelectedCompanyId(e.target.value)}
                className="border border-blue-300 rounded px-3 py-[6px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">------------------Select------------------</option>
                {data.companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleGetDetails}
                disabled={!selectedCompanyId}
                className="bg-blue-800 text-white text-sm px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Get Details
              </button>
            </div>
          </div>

          {/* Display Company Details */}
          {companyDetails ? (
            <div className="mt-6 text-sm bg-white p-4 rounded shadow space-y-2">
              <h3 className="font-semibold text-gray-700">Company Details:</h3>
              <p><strong>Company:</strong> {companyDetails.name}</p>
              <p><strong>Description:</strong> {companyDetails.details}</p>
              <p><strong>Date of Joining:</strong> {companyDetails.dateOfJoining}</p>
              <p>
                <strong>Date of Leaving:</strong>{' '}
                {companyDetails.dateOfleaving ? companyDetails.dateOfleaving : '—'}
              </p>
              <p><strong>PF Amount:</strong> {companyDetails.pfAmount}</p>
            </div>
          ) : (
            selectedCompanyId && (
              <div className="mt-4 text-red-500 text-sm">
                No details found for the selected company.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JointDeclaration;
