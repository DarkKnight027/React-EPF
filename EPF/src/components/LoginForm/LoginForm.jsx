import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectStoredUan, selectStoredPassword } from "./userSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const [uan, setUan] = useState("");
  const [password, setPassword] = useState("");
  const storedUan = useSelector(selectStoredUan);
  const storedPassword = useSelector(selectStoredPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uan !== storedUan || password !== storedPassword) {
      toast.error("Invalid UAN or Password");
    } else {
      toast.success("Login successful!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 p-4 pt-30">
      {/* Left Panel */}
      <div className="w-3/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="flex-1 bg-teal-600 text-white py-2 pl-4 font-bold rounded-md">
          Dear EPF Members !!
        </h2>
        <p className="mb-4 pt-4 font-semibold">
          Dear Member, UAN activation by employees is essential for availing online services of EPFO.
          Please click on <span className="text-blue-800">"Activate UAN"</span> under <strong>"Important Links"</strong> for activating UAN.
        </p>
        <p className="mb-4 font-semibold">
          For all news and updates on EPF, please subscribe our YouTube channel{" "}
          <a href="https://youtube.com/socialepfo" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            youtube.com/socialepfo
          </a>, Instagram{" "}
          <a href="https://instagram.com/socialepfo" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            instagram.com/socialepfo
          </a>, Twitter{" "}
          <a href="https://twitter.com/socialepfo" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            twitter.com/socialepfo
          </a>, and Facebook{" "}
          <a href="https://facebook.com/socialepfo" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            facebook.com/socialepfo
          </a>.
        </p>
        <ul className="text-sm space-y-2">
          <li>
            Important notice about Aadhaar linking.{" "}
            <a href="#" className="text-blue-700 underline">Click here.</a>
          </li>
          <li>
            Benefits for Unorganised workers registering on e SHRAM portal.{" "}
            <a href="#" className="text-blue-700 underline">Click here</a>
          </li>
          <li>Aadhaar is now mandatory for filing ECR.</li>
          <li>
            Important notice about EDLI.{" "}
            <a href="#" className="text-blue-700 underline">Click here to read</a>
          </li>
          <li>
            Bank Account Linking with UAN.{" "}
            <a href="#" className="text-blue-700 underline">Click here to read</a>
          </li>
        </ul>
        <div className="mt-6 space-y-2 font-semibold text-gray-800">
          <p>EPFO NEVER ASKS YOU TO SHARE YOUR PERSONAL DETAILS LIKE AADHAAR, PAN, BANK DETAILS ETC OVER PHONE.</p>
          <p>EPFO NEVER CALLS ANY MEMBER TO DEPOSIT ANY AMOUNT IN ANY BANK.</p>
          <p>PLEASE DO NOT RESPOND TO SUCH CALLS.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/3 flex flex-col justify-start items-center px-4">
        <div className="bg-white p-6 rounded-md shadow-md w-full relative mt-12">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="data:image/png;base64,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"
              alt="Logo"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <h2 className="text-center text-xl font-bold mt-16 mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-medium">UAN</label>
            <input
              type="text"
              placeholder="Enter UAN"
              value={uan}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, "");
                setUan(onlyNumbers);
              }}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ToastContainer position="top-center" autoClose={2000} />
            <div className="flex justify-between space-x-4">
              <button
                type="submit"
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md">
                Sign in
              </button>
              <button
                type="reset"
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md"
                onClick={() => {
                  setUan("");
                  setPassword("");
                }}
              >
                Reset
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-800 font-semibold text-sm">
              Forgot Password ?
            </a>
          </div>
        </div>

        {/* Important Links */}
      <div className="w-full max-w-lg border border-gray-200 bg-white p-6 rounded-md shadow-sm">
      <h2 className="flex-1 bg-teal-600 text-white py-2 pl-4 font-bold rounded-md">
        Important Links
      </h2>
      
      <ul className="space-y-3">
        <li className="hover:bg-gray-50 px-2 py-1 rounded">
          <a href="#" className="text-blue-700 hover:text-blue-900 text-base">
            Track Application Status for Pension on Higher Wages
          </a>
        </li>
        <li className="hover:bg-gray-50 px-2 py-1 rounded">
          <a href="#" className="text-blue-700 hover:text-blue-900 text-base">
            Activate UAN
          </a>
        </li>
        <li className="hover:bg-gray-50 px-2 py-1 rounded">
          <a href="#" className="text-blue-700 hover:text-blue-900 text-base">
            Know your UAN
          </a>
        </li>
        <li className="hover:bg-gray-50 px-2 py-1 rounded">
          <a href="#" className="text-blue-700 hover:text-blue-900 text-base">
            Direct UAN Allotment by Employees
          </a>
        </li>
       
      </ul>
    </div>
      </div>
    </div>
  );
}
