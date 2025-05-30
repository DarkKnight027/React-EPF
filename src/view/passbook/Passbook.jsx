import React from "react";

const Passbook = () => {
  const transactions = [
    { date: "10/01/2024", type: "Credit", amount: "₹1500", balance: "₹50,000" },
    { date: "05/02/2024", type: "Credit", amount: "₹1500", balance: "₹51,500" },
    { date: "01/03/2024", type: "Debit", amount: "₹2000", balance: "₹49,500" },
    { date: "05/04/2024", type: "Credit", amount: "₹1500", balance: "₹51,000" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">EPF Passbook</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm">
          <thead className="bg-blue-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Transaction Type</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Balance</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {transactions.map((entry, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{entry.date}</td>
                <td
                  className={`px-4 py-2 ${
                    entry.type === "Debit" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {entry.type}
                </td>
                <td className="px-4 py-2">{entry.amount}</td>
                <td className="px-4 py-2">{entry.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Passbook;
