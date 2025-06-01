import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logout, updatePassword } from "../LoginForm/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
 
export default function ChangePassword() {
  const [isOpen, setIsOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [aadhaarConsent, setAadhaarConsent] = useState(false);
  const [error, setError] = useState("");
 
  const currentPassword = useSelector((state) => state.user.password);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ← useNavigate to redirect
 
  const rules = {
    length: newPassword.length >= 6,
    uppercase: /[A-Z]/.test(newPassword),
    lowercase: /[a-z]/.test(newPassword),
    number: /\d/.test(newPassword),
    special: /[@#$%^&+=!]/.test(newPassword),
  };
 
  const handleReset = () => {
  if (!oldPassword || !newPassword || !confirmPassword) {
    setError("All fields are required.");
    toast.error("Please fill all fields.");
    return;
  }
 
  if (oldPassword !== currentPassword) {
    setError("Old password is incorrect.");
    toast.error("Old password is incorrect.");
    return;
  }
 
  if (!Object.values(rules).every(Boolean)) {
    setError(
      "Password must include uppercase, lowercase, number, special character and be at least 6 characters."
    );
    toast.error("Password policy not satisfied.");
  } else if (newPassword !== confirmPassword) {
    setError("Passwords do not match");
    toast.error("Passwords do not match.");
  } else {
    dispatch(updatePassword(newPassword));
    toast.success("Password reset successfully. Logging out...");
 
    // Optional: Clear form
    setError("");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setAadhaarConsent(false);
 
    // Delay to show success toast before redirecting
    setTimeout(() => {
      dispatch(logout());        // Optional: Clear user state
      navigate("/login");        // Redirect to login page
    }, 2000); // 2 seconds delay
  }
};
 
 
 
  return (
    <div className="p-3 shadow-md fixed top-22 left-0 w-full z-50 h-[72vh] overflow-auto bg-white px-2 py-6">
      <div className="mx-4">
        <div className="flex justify-between items-center bg-gray-100 border border-black rounded-t-lg shadow px-6 py-3">
          <div className="flex items-center space-x-2 text-blue-700 font-semibold text-[15px] uppercase tracking-wide">
            <span className="text-xl">≡</span>
            <span>Change Password</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-700 text-xl font-extrabold"
          >
            {isOpen ? "−" : "+"}
          </button>
        </div>
 
        {isOpen && (
          <div className="w-full bg-white px-6 py-6 border border-black rounded-b-lg shadow">
            <div className="space-y-6 max-w-3xl mx-auto">
              {[{
                label: "Old Password",
                value: oldPassword,
                onChange: setOldPassword,
                show: showOld,
                toggleShow: () => setShowOld(!showOld),
                placeholder: "Old Password",
              },
              {
                label: "New Password",
                value: newPassword,
                onChange: setNewPassword,
                show: showNew,
                toggleShow: () => setShowNew(!showNew),
                placeholder: "New Password",
                isNewPassword: true,
              },
              {
                label: "Confirm Password",
                value: confirmPassword,
                onChange: setConfirmPassword,
                show: showConfirm,
                toggleShow: () => setShowConfirm(!showConfirm),
                placeholder: "Confirm Password",
              }].map((field, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center justify-center gap-4">
                    <label className="w-48 font-bold text-black text-right">
                      {field.label} <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={field.show ? "text" : "password"}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-64 border border-blue-300 rounded px-3 py-2 pr-10 bg-white focus:outline-none focus:ring focus:ring-blue-100"
                      />
                      <button
                        type="button"
                        onClick={field.toggleShow}
                        className="absolute right-3 top-2 text-xl"
                      >
                        {field.show ? "👁️‍🗨️" : "👁️"}
                      </button>
                    </div>
                  </div>
 
                  {field.isNewPassword && newPassword.length > 0 && (
                    <div className="flex justify-center mt-2">
                      <div className="grid grid-cols-1 w-[90%] max-w-xl text-xs space-y-1">
                        {Object.entries(rules).map(([key, isValid]) => {
                          const descriptions = {
                            length: "Minimum 6 characters",
                            uppercase: "At least one uppercase letter",
                            lowercase: "At least one lowercase letter",
                            number: "At least one number",
                            special: "At least one special character (@, #, $, etc.)",
                          };
                          return (
                            <div
                              key={key}
                              className={`flex justify-between ${isValid ? "text-green-600" : "text-red-600"}`}
                            >
                              <span>{descriptions[key]}</span>
                              {!isValid && <span className="font-bold">✖</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
 
              {error && (
                <div className="text-red-600 font-semibold text-center mt-2">
                  {error}
                </div>
              )}
 
              {/* Consent box */}
              <div className="bg-blue-50 border border-blue-300 p-4 rounded text-sm mt-6 max-w-full mx-auto">
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={aadhaarConsent}
                    onChange={() => setAadhaarConsent(!aadhaarConsent)}
                  />
                  <span>
                    मैं पासवर्ड रीसेट करने के लिए अपनी पहचान स्थापित करने के
                    उद्देश्य से आधार प्रमाणिकरण के लिए अपना आधार नंबर, वन टाइम
                    पिन (ओटीपी) डेटा प्रदान करने की सहमति देता हूँ।
                    <br />
                    <strong>
                      I hereby consent to provide my Aadhaar Number, One Time
                      Pin (OTP)...
                    </strong>
                  </span>
                </label>
                <p className="mt-1 text-xs text-gray-500 text-center">
                  Version: [ Fri 23, May 2025 (PV 4.1.4) ]
                </p>
              </div>
 
              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded text-sm font-semibold">
                  Get AADHAAR OTP
                </button>
                <button
                  onClick={handleReset}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded text-sm font-semibold"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}