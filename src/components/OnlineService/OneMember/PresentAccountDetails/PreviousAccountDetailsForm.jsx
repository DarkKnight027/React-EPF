import React, { useState } from "react";

const PreviousAccountDetailsForm = () => {
  const [memberId, setMemberId] = useState("");

  const handleGetDetails = () => {
    // Logic to get details goes here
    console.log("Fetching details for:", memberId);
  };

  const handleReset = () => {
    setMemberId("");
  };

  const handleGenerateMID = () => {
    // Logic to generate MID
    console.log("Generating MID...");
  };

  return (
    <div className="bg-blue-50 border border-blue-300 rounded-md p-4 shadow-sm mb-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-semibold text-gray-700">
          Step 1 : Select details of previous accounts (which are to be
          transferred)
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-md p-3">
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <p className="text-sm text-gray-600">
            To generate Member ID in required format, click
          </p>
          <button
            onClick={handleGenerateMID}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded"
          >
            Get MID
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <label
            htmlFor="memberId"
            className="text-sm text-gray-700 font-medium"
          >
            Member ID / UAN : <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="memberId"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            placeholder="Enter MID/UAN"
            className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
          />

          <button
            onClick={handleGetDetails}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded"
          >
            Get Details
          </button>

          <button
            onClick={handleReset}
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-medium px-3 py-1 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousAccountDetailsForm;
