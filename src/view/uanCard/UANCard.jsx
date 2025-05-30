import React from "react";

const UANCard = () => {
  const person = {
    name: "Rajiv Mehra",
    uan: "101234567890",
    dob: "15/04/1985",
    gender: "Male",
    fatherName: "Om Prakash Mehra",
    employer: "Infosys Ltd",
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 border">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">UAN Card</h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Name:</strong> {person.name}
        </p>
        <p>
          <strong>UAN:</strong> {person.uan}
        </p>
        <p>
          <strong>Date of Birth:</strong> {person.dob}
        </p>
        <p>
          <strong>Gender:</strong> {person.gender}
        </p>
        <p>
          <strong>Father's Name:</strong> {person.fatherName}
        </p>
        <p>
          <strong>Employer:</strong> {person.employer}
        </p>
      </div>
    </div>
  );
};

export default UANCard;
