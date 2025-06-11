import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClaimData, updateClaimField } from "./claimSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Claim() {
  const dispatch = useDispatch();
  const claimData = useSelector((state) => state.claim.claimFormData);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load data from JSON only if redux doesn't have it
  useEffect(() => {
    if (!claimData) {
      fetch("/personalInfo.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => {
          dispatch(setClaimData(data.claimFormData));
          setFormData(data.claimFormData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching claim data:", err);
          setLoading(false);
        });
    } else {
      setFormData(claimData);
      setLoading(false);
    }
  }, [dispatch, claimData]);

  const handleChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    if (name === "pan" || name === "ifsCode") {
      value = value.toUpperCase();
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = () => {
  if (formData) {
    Object.entries(formData).forEach(([name, value]) => {
      dispatch(updateClaimField({ name, value }));
    });
    toast.success("Form data submitted and synced with Redux!", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};


  if (loading) return <div className="p-3">Loading claim data...</div>;
  if (!formData) return <div className="p-3 text-red-600">Failed to load claim data.</div>;

  return (
      <div className="p-3 shadow-md mt-12 w-full">
      <div className="border border-gray-300 rounded-md overflow-auto">
        <div className="border-b-[3px] border-yellow-700 p-2 font-bold text-yellow-700 text-md bg-[#f6f6f6] uppercase">
          ONLINE CLAIM (FORM 31,19,10C & 10D)
        </div>

        <table className="w-full text-left border-collapse border-black">
          <tbody>
            {/* MEMBER DETAILS */}
            <tr>
              <td colSpan="6" className="border border-black font-semibold px-2 py-1 bg-[#f6f6f6] uppercase text-lg">
                MEMBER DETAILS
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border font-bold px-2 py-1">EMPLOYEE NAME</td>
              <td colSpan={2} className="border px-2 py-1">
                <input
                  type="text"
                  name="employeeName"
                  placeholder="Enter Employee Name"
                  className="input"
                  value={formData.employeeName}
                  onChange={handleChange}
                />
              </td>
              <td className="border font-bold px-2 py-1">FATHER/HUSBAND NAME</td>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  name="fatherHusbandName"
                  placeholder="Enter Father/Husband Name"
                  className="input"
                  value={formData.fatherHusbandName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border font-bold px-2 py-1">DATE OF BIRTH</td>
              <td colSpan={2} className="border px-2 py-1">
                <input
                  type="date"
                  name="dob"
                  className="input"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </td>
              <td className="border font-bold px-2 py-1">MOBILE</td>
              <td className="border px-2 py-1">
                <input
                  type="tel"
                  name="mobile"
                  className="input"
                  placeholder="Enter Mobile Number"
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
              <td colSpan="6" className="border font-semibold px-2 py-1 bg-[#f6f6f6] uppercase text-lg">
                KYC DETAILS
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border font-bold px-2 py-1">AADHAAR No.</td>
              <td colSpan={2} className="border px-2 py-1">
                <input
                  type="text"
                  name="aadhaar"
                  className="input"
                  placeholder="Enter Aadhaar Number"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  pattern="^\d{12}$"
                  maxLength={12}
                  title="Aadhaar number must be exactly 12 digits"
                />
              </td>
              <td className="border font-bold px-2 py-1">PAN No.</td>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  name="pan"
                  className="input uppercase"
                  placeholder="Enter PAN Number"
                  value={formData.pan}
                  onChange={handleChange}
                  pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
                  maxLength={10}
                  title="PAN must be 10 characters: 5 letters, 4 digits, 1 letter"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border font-bold px-2 py-1">BANK ACCOUNT No.</td>
              <td colSpan={4} className="border px-2 py-1">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    name="bankAccount"
                    className="input w-64"
                    placeholder="Enter Bank Account Number"
                    value={formData.bankAccount}
                    onChange={handleChange}
                    pattern="^\d{9,18}$"
                    maxLength={18}
                    title="Bank account number must be between 9 to 18 digits"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border font-bold px-2 py-1">IFS CODE</td>
              <td colSpan={2} className="border px-2 py-1">
                <input
                  type="text"
                  name="ifsCode"
                  className="input uppercase"
                  placeholder="Enter IFSC Code"
                  value={formData.ifsCode}
                  onChange={handleChange}
                  pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
                  maxLength={11}
                  title="IFSC Code must be 11 characters"
                />
              </td>
              <td className="border font-bold px-2 py-1">BRANCH NAME & ADDRESS</td>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  name="branchNameAddress"
                  className="input"
                  placeholder="Enter Branch Name & Address"
                  value={formData.branchNameAddress}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* SERVICE DETAILS */}
            <tr>
              <td colSpan="6" className="border font-semibold px-2 py-2 bg-[#f6f6f6] uppercase text-lg">
                SERVICE DETAILS
              </td>
            </tr>
            <tr className="font-bold text-center">
              <td className="border px-2 py-1">Member ID</td>
              <td className="border px-2 py-1">DOJ (EPF)</td>
              <td className="border px-2 py-1">DOJ (EPS)</td>
              <td className="border px-2 py-1">DOE (EPF)</td>
              <td className="border px-2 py-1">DOE (EPS)</td>
              <td className="border px-2 py-1">Reason of Leaving</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  name="memberId"
                  className="input"
                  placeholder="Enter Member ID"
                  value={formData.memberId}
                  onChange={handleChange}
                />
              </td>
              <td className="border px-2 py-1">
                <input type="date" name="dojEpf" className="input" value={formData.dojEpf} onChange={handleChange} />
              </td>
              <td className="border px-2 py-1">
                <input type="date" name="dojEps" className="input" value={formData.dojEps} onChange={handleChange} />
              </td>
              <td className="border px-2 py-1">
                <input type="date" name="doeEpf" className="input" value={formData.doeEpf} onChange={handleChange} />
              </td>
              <td className="border px-2 py-1">
                <input type="date" name="doeEps" className="input" value={formData.doeEps} onChange={handleChange} />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  name="reasonOfLeaving"
                  className="input"
                  placeholder="Reason of Leaving"
                  value={formData.reasonOfLeaving}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* ✅ Submit Button */}
      <div className="flex justify-end p-4">
  <button
    onClick={handleSubmit}
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    Submit
  </button>
</div>

{/* ✅ Toast Container */}
<ToastContainer />

      </div>
    </div>
  );
}
