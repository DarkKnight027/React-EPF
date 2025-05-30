import React, { useState } from 'react';

const Kyc = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectDoc = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="p-3 shadow-md fixed top-24 left-0 w-full z-50 min-h-screen px-2 py-6 bg-white">
      {/* Green Info Box */}
      <div className="bg-green-100 text-green-800 px-4 py-2 rounded text-sm font-semibold mb-4">
        Note : An OTP will be sent to your AADHAAR linked mobile while submitting KYC.
      </div>

      {/* KYC Section */}
      <div className="bg-blue-100 rounded">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-sm font-semibold text-gray-800">Add KYC</h2>
          <span
            className="text-teal-600 cursor-pointer text-lg font-bold"
            onClick={handleToggle}
          >
            {isOpen ? '–' : '+'}
          </span>
        </div>

        {isOpen && (
          <div className="py-6 text-center">
            <p className="uppercase text-gray-600 text-sm font-semibold mb-4">
              Click on KYC Document To Add
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleSelectDoc('Bank')}
                className="bg-gray-300 text-gray-800 rounded-full px-4 py-1 text-sm font-semibold"
              >
                Bank
              </button>
              <button
                onClick={() => handleSelectDoc('PAN')}
                className="bg-gray-300 text-gray-800 rounded-full px-4 py-1 text-sm font-semibold"
              >
                PAN
              </button>
              <button
                onClick={() => handleSelectDoc('Passport')}
                className="bg-gray-300 text-gray-800 rounded-full px-4 py-1 text-sm font-semibold"
              >
                Passport
              </button>
            </div>
            {selectedDoc && (
              <div className="mt-4 text-sm text-gray-700">
                You selected: <strong>{selectedDoc}</strong>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kyc;
