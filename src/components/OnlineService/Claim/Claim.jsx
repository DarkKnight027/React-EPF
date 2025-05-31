import React, { useState } from "react";

export default function Claim() {
  const [formData, setFormData] = useState({
    employeeName: "",
    fatherHusbandName: "",
    dob: "",
    mobile: "",
    aadhaar: "",
    pan: "",
    bankAccount: "",
    ifsCode: "",
    branchNameAddress: "",
    memberId: "",
    dojEpf: "",
    dojEps: "",
    doeEpf: "",
    doeEps: "",
    reasonOfLeaving: "",
  });

  const handleChange = (e) => {
    // Optional: uppercase for PAN and IFSC inputs
    let value = e.target.value;
    if (e.target.name === "pan" || e.target.name === "ifsCode") {
      value = value.toUpperCase();
    }
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  return (
    <div className="p-3 shadow-md fixed top-24 left-0 w-full z-50min-h-screen bg-white px-2 py-6">
      <div className="border border-gray-300 rounded-md overflow-auto">
        {/* Heading */}
        <div className="border-b-[3px] border-yellow-700 p-2 font-bold text-yellow-700 text-md bg-[#f6f6f6] uppercase">
          ONLINE CLAIM (FORM 31,19,10C & 10D)
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse border-black">
          <tbody>
            {/* MEMBER DETAILS */}
            <tr>
              <td
                colSpan="6"
                className="border border-black font-semibold px-2 py-1 bg-[#f6f6f6] uppercase text-lg"
              >
                MEMBER DETAILS
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black px-2 py-1 font-bold">
                EMPLOYEE NAME
              </td>
              <td colSpan={2} className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="employeeName"
                  placeholder="Enter Employee Name"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.employeeName}
                  onChange={handleChange}
                />
              </td>
              <td colSpan={1} className="border border-black px-2 py-1 font-bold">
                FATHER/HUSBAND NAME
              </td>
              <td colSpan={1} className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="fatherHusbandName"
                  placeholder="Enter Father/Husband Name"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.fatherHusbandName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black px-2 py-1 font-bold">
                DATE OF BIRTH
              </td>
              <td colSpan={2} className="border border-black px-2 py-1">
                <input
                  type="date"
                  name="dob"
                  placeholder="Enter Date of Birth"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </td>
              <td colSpan={1} className="border border-black px-2 py-1 font-bold">
                MOBILE
              </td>
              <td colSpan={1} className="border border-black px-2 py-1">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="^\d{10}$"
                  maxLength={10}
                  title="Mobile number must be exactly 10 digits"
                />
              </td>
            </tr>

            {/* KYC DETAILS */}
            <tr>
              <td
                colSpan="6"
                className="border border-black font-semibold px-2 py-1 bg-[#f6f6f6] uppercase text-lg"
              >
                KYC DETAILS
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black px-2 py-1 font-bold">
                AADHAAR No.
              </td>
              <td colSpan={2} className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="aadhaar"
                  placeholder="Enter Aadhaar Number"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  pattern="^\d{12}$"
                  maxLength={12}
                  title="Aadhaar number must be exactly 12 digits"
                />
              </td>
              <td colSpan={1} className="border border-black px-2 py-1 font-bold">
                PAN No.
              </td>
              <td colSpan={1} className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="pan"
                  placeholder="Enter PAN Number"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.pan}
                  onChange={handleChange}
                  pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
                  maxLength={10}
                  style={{ textTransform: "uppercase" }}
                  title="PAN must be 10 characters: 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F)"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black px-2 py-1 font-bold">
                BANK ACCOUNT No.
              </td>
              <td colSpan={4} className="border border-black px-2 py-1">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    name="bankAccount"
                    placeholder="Enter Bank Account Number"
                    className="border px-2 py-1 w-64 text-black rounded"
                    value={formData.bankAccount}
                    onChange={handleChange}
                    pattern="^\d{9,18}$"
                    maxLength={18}
                    title="Bank account number must be between 9 to 18 digits"
                  />
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Verify
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black px-2 py-1 font-bold">
                IFS CODE
              </td>
              <td colSpan={2} className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="ifsCode"
                  placeholder="Enter IFSC Code"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.ifsCode}
                  onChange={handleChange}
                  pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
                  maxLength={11}
                  style={{ textTransform: "uppercase" }}
                  title="IFSC Code must be 11 characters, e.g. SBIN0001234"
                />
              </td>
              <td colSpan={1} className="border border-black px-2 py-1 font-bold">
                BRANCH NAME & ADDRESS
              </td>
              <td colSpan={1} className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="branchNameAddress"
                  placeholder="Enter Branch Name & Address"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.branchNameAddress}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* SERVICE DETAILS */}
            <tr>
              <td
                colSpan="6"
                className="border border-black font-semibold px-2 py-2 bg-[#f6f6f6] uppercase text-lg"
              >
                SERVICE DETAILS
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1 font-bold text-center">Member ID</td>
              <td className="border border-black px-2 py-1 font-bold text-center">DOJ (EPF)</td>
              <td className="border border-black px-2 py-1 font-bold text-center">DOJ (EPS)</td>
              <td className="border border-black px-2 py-1 font-bold text-center">DOE (EPF)</td>
              <td className="border border-black px-2 py-1 font-bold text-center">DOE (EPS)</td>
              <td className="border border-black px-2 py-1 font-bold text-center">Reason of Leaving</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="memberId"
                  placeholder="Enter Member ID"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.memberId}
                  onChange={handleChange}
                />
              </td>
              <td className="border border-black px-2 py-1">
                <input
                  type="date"
                  name="dojEpf"
                  placeholder="DOJ (EPF)"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.dojEpf}
                  onChange={handleChange}
                />
              </td>
              <td className="border border-black px-2 py-1">
                <input
                  type="date"
                  name="dojEps"
                  placeholder="DOJ (EPS)"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.dojEps}
                  onChange={handleChange}
                />
              </td>
              <td className="border border-black px-2 py-1">
                <input
                  type="date"
                  name="doeEpf"
                  placeholder="DOE (EPF)"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.doeEpf}
                  onChange={handleChange}
                />
              </td>
              <td className="border border-black px-2 py-1">
                <input
                  type="date"
                  name="doeEps"
                  placeholder="DOE (EPS)"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.doeEps}
                  onChange={handleChange}
                />
              </td>
              <td className="border border-black px-2 py-1">
                <input
                  type="text"
                  name="reasonOfLeaving"
                  placeholder="Reason Of Leaving"
                  className="w-full px-1 py-1 border border-gray-300 rounded text-black"
                  value={formData.reasonOfLeaving}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* NOTE */}
        <div className="text-black-600 text-xs p-3 bg-yellow-50 border-t border-black">
          <strong>Note:-</strong> Please verify your Bank Account Number as
          seeded against UAN. If seeded bank account doesn't belong to you or is closed,
          please update bank details (KYC) with latest Bank Account Number through Unified
          Portal / Your Employer before proceeding with Online claim.
        </div>
      </div>
    </div>
  );
}   