import React from 'react';

const ChangeContactDetails = () => {
  return (
    // Outer container: Simulates the very light off-white background of the page content area
    // that the main white box sits on.
    <div className="p-3 shadow-md fixed top-24 left-0 w-full z-50min-h-screen bg-[#fdf8e4] px-2 py-6"> {/* Specific light background, added font-sans */}
      {/* Main white content box: This is the large card containing all the details */}
      <div className="bg-white px-6 pt-4 pb-16 shadow-sm rounded-md border border-gray-100"> {/* Adjusted padding-bottom for more empty space */}

        {/* Header Section: "Change Contact Details" and the icons on the right */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center text-gray-700">
            {/* Pencil/Edit Icon: Replicated using SVG path that closely resembles the image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="text-sm font-medium text-[#ee9a08]">Change Contact Details</span> {/* Exact text color */}
          </div>
          {/* Right-side Icons: Replicated with specific Unicode characters for close visual match */}
          <div className="flex items-center text-gray-400 text-lg">
            <span className="font-bold mr-1 leading-none -mt-1">&#x22EE;</span> {/* Vertical ellipsis */}
            <span className="font-bold leading-none -mt-1">&#x2630;</span> {/* Unicode for hamburger menu */}
          </div>
        </div>

        {/* Contact Details Grid: Contains the two main columns (Mobile & Email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mt-8"> {/* Increased gap-x to match wide spacing */}

          {/* Aadhaar Linked Mobile Number Section */}
          <div>
            {/* Title with Phone Icon and Text */}
            <div className="flex items-center mb-3">
              {/* Phone Icon: Specific color and size */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#098541] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-sm font-semibold text-[#078610]">Aadhaar Linked Mobile Number</h3> {/* Exact text color */}
            </div>
            {/* Green Underline: Key visual element */}
            <div className="border-b border-[#208b50] w-[70%] mb-6"></div> {/* Exact green color, adjusted width */}

            {/* Registered Mobile Number Details */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-[#6b6b6b] text-sm">Registered Mobile Number</p> {/* Exact text color */}
              <div className="flex items-center">
                <p className="text-[#333333] text-sm font-bold mr-2">XXX XXXX 5609</p> {/* Exact text color, font weight */}
                {/* Verified Badge: Specific background, text color, precise font size and padding */}
                <span className="bg-[#e6ffe6] text-[#208b50] text-[0.6rem] font-semibold px-2 py-[0.1rem] rounded-full leading-tight tracking-tight"> {/* Specific bg, text color, tiny font size, tight leading/tracking */}
                  verified
                </span>
              </div>
            </div>

            {/* Change Mobile Number Checkbox */}
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="changeMobileExactMatch"
                name="changeMobileExactMatch"
                className="h-4 w-4 text-[#8a8a8a] border-[#cccccc] rounded focus:ring-transparent focus:ring-offset-0" // Subtle gray color, removed default blue focus ring
              />
              <label htmlFor="changeMobileExactMatch" className="ml-2 text-sm text-[#4a4a4a]">
                Change Mobile Number
              </label>
            </div>
          </div>

          {/* E-Mail Id Section: Identical structure to Mobile Number section */}
          <div>
            {/* Title with Mail Icon and Text */}
            <div className="flex items-center mb-3">
              {/* Mail Icon: Specific color and size */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#208b50] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-sm font-semibold text-[#078610]">E-Mail Id</h3>
            </div>
            {/* Green Underline */}
            <div className="border-b border-[#208b50] w-[70%] mb-6"></div>

            {/* Registered Email Details */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-[#6b6b6b] text-sm">Registered Email Id</p>
              <div className="flex items-center">
                <p className="text-[#333333] text-sm font-bold mr-2">XXXXLEGEND007@GMAIL.COM</p>
                {/* Verified Badge */}
                <span className="bg-[#e6ffe6] text-[#208b50] text-[0.6rem] font-semibold px-2 py-[0.1rem] rounded-full leading-tight tracking-tight">
                  verified
                </span>
              </div>
            </div>

            {/* Change E-Mail Id Checkbox */}
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="changeEmailExactMatch"
                name="changeEmailExactMatch"
                className="h-4 w-4 text-[#8a8a8a] border-[#cccccc] rounded focus:ring-transparent focus:ring-offset-0"
              />
              <label htmlFor="changeEmailExactMatch" className="ml-2 text-sm text-[#4a4a4a]">
                Change E-Mail Id
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeContactDetails;