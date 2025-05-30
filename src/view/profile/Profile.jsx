import React from "react";

const Profile = () => {
  const member = {
    name: "Rajiv Mehra",
    uan: "101234567890",
    dob: "15/04/1985",
    gender: "Male",
    maritalStatus: "Married",
    nationality: "Indian",
    fatherName: "Om Prakash Mehra",
    spouseName: "Anita Mehra",
    mobile: "9876543210",
    email: "rajiv.mehra@example.com",
    aadhaar: "XXXX-XXXX-1234",
    pan: "ABCDE1234F",
    doj: "01/01/2015",
    doe: "Present",
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Member Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
        <div>
          <p>
            <strong>Name:</strong> {member.name}
          </p>
          <p>
            <strong>UAN:</strong> {member.uan}
          </p>
          <p>
            <strong>Date of Birth:</strong> {member.dob}
          </p>
          <p>
            <strong>Gender:</strong> {member.gender}
          </p>
          <p>
            <strong>Marital Status:</strong> {member.maritalStatus}
          </p>
          <p>
            <strong>Nationality:</strong> {member.nationality}
          </p>
        </div>
        <div>
          <p>
            <strong>Father's Name:</strong> {member.fatherName}
          </p>
          <p>
            <strong>Spouse Name:</strong> {member.spouseName}
          </p>
          <p>
            <strong>Mobile:</strong> {member.mobile}
          </p>
          <p>
            <strong>Email:</strong> {member.email}
          </p>
          <p>
            <strong>Aadhaar:</strong> {member.aadhaar}
          </p>
          <p>
            <strong>PAN:</strong> {member.pan}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p>
          <strong>Date of Joining:</strong> {member.doj}
        </p>
        <p>
          <strong>Date of Exit:</strong> {member.doe}
        </p>
      </div>

      <div className="mt-6">
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          Update Basic Details
        </button>
      </div>
    </div>
  );
};

export default Profile;
