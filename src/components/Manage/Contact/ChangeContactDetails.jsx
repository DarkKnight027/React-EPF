import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileEdit, toggleEmailEdit, updateContact } from '../Contact/contactSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangeContactDetails = () => {
  const dispatch = useDispatch();
  const { mobile: reduxMobile, email: reduxEmail, isMobileEditable, isEmailEditable } = useSelector(state => state.contact);

  const [mobile, setMobile] = useState(reduxMobile);
  const [email, setEmail] = useState(reduxEmail);

  useEffect(() => {
    setMobile(reduxMobile);
  }, [reduxMobile]);

  useEffect(() => {
    setEmail(reduxEmail);
  }, [reduxEmail]);

  const handleUpdate = () => {
    const mobileValid = /^[0-9]{10}$/.test(mobile.replace(/\s/g, ''));
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isMobileEditable && !mobileValid) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (isEmailEditable && !emailValid) {
      toast.error('Please enter a valid email address.');
      return;
    }

    dispatch(updateContact({ mobile, email }));
    toast.success('Contact details updated successfully!');
  };

  return (
    <div className="bg-[#f0f4f7] min-h-[350px] p-6 pt-20 font-sans"> {/* ✅ pt-20 added here */}
      <div className="bg-white px-6 pt-4 pb-10 shadow-sm rounded-md border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span className="text-sm font-medium text-[#ee9a08]">Change Contact Details</span>
          </div>
          <div className="flex items-center text-gray-400 text-lg">
            <span className="font-bold mr-1">&#x22EE;</span>
            <span className="font-bold">&#x2630;</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mt-8">
          {/* Mobile Section */}
          <div>
            <div className="flex items-center mb-3">
              <svg className="h-4 w-4 text-[#098541] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-sm font-semibold text-[#078610]">Aadhaar Linked Mobile Number</h3>
            </div>
            <div className="border-b border-[#208b50] w-[70%] mb-6"></div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-[#6b6b6b] text-sm">Registered Mobile Number</p>
              {isMobileEditable ? (
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                  placeholder="Enter 10-digit mobile"
                />
              ) : (
                <div className="flex items-center">
                  <p className="text-[#333333] text-sm font-bold mr-2">{mobile}</p>
                  <span className="bg-[#e6ffe6] text-[#208b50] text-[0.6rem] font-semibold px-2 py-[0.1rem] rounded-full">verified</span>
                </div>
              )}
            </div>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                checked={isMobileEditable}
                onChange={() => dispatch(toggleMobileEdit())}
                className="h-4 w-4"
              />
              <label className="ml-2 text-sm text-[#4a4a4a]">Change Mobile Number</label>
            </div>
          </div>

          {/* Email Section */}
          <div>
            <div className="flex items-center mb-3">
              <svg className="h-4 w-4 text-[#208b50] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-sm font-semibold text-[#078610]">E-Mail Id</h3>
            </div>
            <div className="border-b border-[#208b50] w-[70%] mb-6"></div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-[#6b6b6b] text-sm">Registered Email Id</p>
              {isEmailEditable ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                  placeholder="Enter email"
                />
              ) : (
                <div className="flex items-center">
                  <p className="text-[#333333] text-sm font-bold mr-2">{email}</p>
                  <span className="bg-[#e6ffe6] text-[#208b50] text-[0.6rem] font-semibold px-2 py-[0.1rem] rounded-full">verified</span>
                </div>
              )}
            </div>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                checked={isEmailEditable}
                onChange={() => dispatch(toggleEmailEdit())}
                className="h-4 w-4"
              />
              <label className="ml-2 text-sm text-[#4a4a4a]">Change E-Mail Id</label>
            </div>
          </div>
        </div>

        {/* Update Button */}
        {(isMobileEditable || isEmailEditable) && (
          <div className="mt-8 text-center">
            <button
              onClick={handleUpdate}
              className="bg-[#208b50] hover:bg-[#1b6e3f] text-white font-semibold py-2 px-6 rounded-md shadow"
            >
              Update
            </button>
          </div>
        )}
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ChangeContactDetails;
