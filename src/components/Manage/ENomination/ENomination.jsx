import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ENomination = () => {
  const nominations = useSelector((state) => state.eNomination.nominations);

  useEffect(() => {
    toast.info("e-Nomination is not mandatory for filing of advance claim.", {
      position: "top-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  return (
    <div className="p-3 shadow-md mt-12 w-full">
      <ToastContainer />
      <div className="bg-white border shadow-sm rounded-md p-4 space-y-4">

        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          Enter New e-Nomination
        </a>

        <h2 className="text-gray-700 font-semibold text-base border-b pb-2">e-Nomination History</h2>

        {/* Controls */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <label>Display</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>records per page</span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-2 py-1 text-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full text-sm text-left mt-2 border">
            <thead className="bg-gray-100 text-gray-700 border-b">
              <tr>
                <th className="px-3 py-2 border-r">Sr No.</th>
                <th className="px-3 py-2 border-r">Status</th>
                <th className="px-3 py-2 border-r">e-Nomination Details</th>
                <th className="px-3 py-2">e-Nomination Date &amp; Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {nominations.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="px-3 py-2 border-r">{index + 1}</td>
                  <td className={`px-3 py-2 border-r font-medium ${item.status.includes('Successful') ? 'text-green-600' : item.status.includes('Rejected') ? 'text-red-600' : 'text-yellow-600'}`}>
                    {item.status}
                  </td>
                  <td className="px-3 py-2 border-r">{item.details}</td>
                  <td className="px-3 py-2">{item.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-sm text-gray-600 mt-2 flex justify-between items-center">
          <span>Showing page 1 of 1</span>
        </div>
      </div>
    </div>
  );
};

export default ENomination;
