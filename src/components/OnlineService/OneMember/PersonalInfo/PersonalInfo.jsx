// src/components/PersonalInfo/PersonalInfo.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonalInfo } from "./personalInfoSlice";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.personalInfo);

  useEffect(() => {
    dispatch(fetchPersonalInfo());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load data.</p>;

  return (
    <div className="bg-blue-50 border border-blue-300 rounded-md p-3 mb-4 shadow-sm">
      {/* Removed header part here */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p>
            <span className="font-semibold">Name :</span> {data.name}
          </p>
          <p>
            <span className="font-semibold">Bank Account No. :</span> {data.bankAccount}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Mobile No. :</span> {data.mobile}
          </p>
          <p>
            <span className="font-semibold">IFSC :</span> {data.ifsc}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Email ID :</span> {data.email}
          </p>
          <p>
            <span className="font-semibold">Aadhaar No. :</span> {data.aadhaar}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
