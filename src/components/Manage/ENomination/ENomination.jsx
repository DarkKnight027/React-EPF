import React from 'react'

const ENomaination = () => {
  return (
    <div className="p-3 shadow-md fixed top-24 left-0 w-full z-50">
      <div className="bg-white border shadow-sm rounded-md p-4 space-y-4">
        {/* Alert */}
        <p className="text-red-600 text-sm font-medium">
          e-Nomination is not mandatory for filing of advance claim.
        </p>

        {/* Enter Link */}
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          Enter New e-Nomination
        </a>

        {/* Table Section */}
        <h2 className="text-gray-700 font-semibold text-base border-b pb-2">e-Nomination History</h2>

        {/* Controls */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <label>Display</label>&nbsp;&nbsp;
            <select className="border rounded px- py-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>&nbsp;&nbsp;
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
              <tr className="border-t">
                <td className="px-3 py-2 border-r">1</td>
                <td className="px-3 py-2 border-r font-medium text-green-600">
                  Nomination Successful
                </td>
                <td className="px-3 py-2 border-r">
                  {/* Icon removed */}
                </td>
                <td className="px-3 py-2">30-NOV-2023 17:50</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="text-sm text-gray-600 mt-2 flex justify-between items-center">
          <span>Showing page 1 of 1</span>
          <div className="flex items-center space-x-2">
           
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ENomaination
