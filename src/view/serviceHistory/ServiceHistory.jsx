import React from "react";

const ServiceHistory = () => {
  const history = [
    {
      employer: "Infosys Ltd",
      doj: "01/01/2015",
      doe: "31/12/2019",
      designation: "Software Engineer",
      location: "Bangalore",
    },
    {
      employer: "TCS Ltd",
      doj: "15/01/2020",
      doe: "Present",
      designation: "Senior Developer",
      location: "Hyderabad",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Service History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm">
          <thead className="bg-blue-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2">Employer</th>
              <th className="px-4 py-2">DOJ</th>
              <th className="px-4 py-2">DOE</th>
              <th className="px-4 py-2">Designation</th>
              <th className="px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {history.map((job, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{job.employer}</td>
                <td className="px-4 py-2">{job.doj}</td>
                <td className="px-4 py-2">{job.doe}</td>
                <td className="px-4 py-2">{job.designation}</td>
                <td className="px-4 py-2">{job.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceHistory;
