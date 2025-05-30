import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPresentAccountDetails } from "./presentAccountDetailsSlice";

const PresentAccountDetails = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.presentAccountDetails);

  useEffect(() => {
    dispatch(fetchPresentAccountDetails());
  }, [dispatch]);

  if (status === "loading") return <p>Loading present account details...</p>;
  if (status === "failed") return <p>Failed to load present account details.</p>;

  return (
    <div className="bg-blue-50 border border-blue-300 rounded-md p-3 mb-4 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p><span className="font-semibold">UAN :</span> {data.UAN}</p>
          <p><span className="font-semibold">Establishment Name :</span> {data["Establishment Name"]}</p>
          <p><span className="font-semibold">Date of joining :</span> {data["Date of joining"]}</p>
          <p><span className="font-semibold">Member Name :</span> {data["Member Name"]}</p>
        </div>
        <div>
          <p><span className="font-semibold">Father/Spouse Name :</span> {data["Father/Spouse Name"]}</p>
          <p><span className="font-semibold">P.F.Account No. :</span> {data["P.F.Account No."]}</p>
          <p><span className="font-semibold">Establishment Address :</span> {data["Establishment Address"]}</p>
          <p><span className="font-semibold">PF Account Held By :</span> {data["PF Account Held By"]}</p>
        </div>
        <div>
          <p><span className="font-semibold">Date of Birth :</span> {data["Date of Birth"]}</p>
          <p><span className="font-semibold">Relationship :</span> {data.Relationship}</p>
        </div>
      </div>
    </div>
  );
};

export default PresentAccountDetails;
