import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExitData } from "../MarkExit/exitSlice";
import { Minus, Menu, AlertTriangle } from "lucide-react";

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="flex items-center justify-between p-3 border-b-2 border-yellow-600 bg-white">
        <div className="flex items-center">
          <Menu className="h-5 w-5 text-gray-500 mr-2" />
          <h2 className="text-base font-semibold text-gray-700">{title}</h2>
        </div>
        <Minus className="h-5 w-5 text-gray-500" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function MarkExit() {
  const dispatch = useDispatch();
  const { employment, history, status } = useSelector((state) => state.exit);

  useEffect(() => {
    dispatch(fetchExitData());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex justify-center pt-16"> {/* ✅ Add pt-16 here */}
      <div className="w-full max-w-2xl px-6 py-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-700">Manage / Mark Exit</h1>
        </div>

        <Card title="Employment">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : employment.length === 0 ? (
            <div className="flex items-center justify-center p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">No employment found.</span>
            </div>
          ) : (
            <ul className="space-y-2">
              {employment.map((emp, index) => (
                <li key={index} className="p-3 bg-gray-50 rounded border text-sm text-gray-800">
                  <div><strong>Name:</strong> {emp.employeeName}</div>
                  <div><strong>Company:</strong> {emp.company}</div>
                  <div><strong>Date of Leaving:</strong> {emp.dateOfLeaving}</div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Date of Exit Seeding History">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : history.length === 0 ? (
            <div className="flex items-center justify-center p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">No records to view.</span>
            </div>
          ) : (
            <ul className="space-y-2">
              {history.map((h, index) => (
                <li key={index} className="p-3 bg-gray-50 rounded border text-sm text-gray-800">
                  {h.date} - {h.status}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
