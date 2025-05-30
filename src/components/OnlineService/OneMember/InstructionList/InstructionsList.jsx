// components/InstructionsList.jsx
import React from "react";

const instructions = [
  "KYC details are seeded against the UAN.",
  "Only one transfer request against the previous member ID can be accepted.",
  "If previous / present (Exempted) trust bank account and IFS code are available.",
  "Please ensure that the personal information shown below is correct before proceeding with claim submission.",
];

const InstructionsList = () => (
  <ul className="list-disc pl-5 space-y-1 text-gray-700">
    {instructions.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default InstructionsList;
