import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Basic Details Card */}
      <div
        onClick={() => navigate("/student/basic-details")}
        className="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:shadow-xl transition"
      >
        <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
        <p className="text-gray-600 text-sm">
          Fill your personal information like name, email, DOB etc.
        </p>
      </div>

      {/* Education Details Card */}
      <div
        onClick={() => navigate("/student/education-details")}
        className="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:shadow-xl transition"
      >
        <h2 className="text-xl font-semibold mb-2">Education Details</h2>
        <p className="text-gray-600 text-sm">
          Provide details about your degree, university and GPA.
        </p>
      </div>

      {/* Job Details Card */}
      <div
        onClick={() => navigate("/student/job-details")}
        className="bg-white shadow-lg rounded-2xl p-5 cursor-pointer hover:shadow-xl transition"
      >
        <h2 className="text-xl font-semibold mb-2">Job Details</h2>
        <p className="text-gray-600 text-sm">
          Enter your job role, company name and joining date.
        </p>
      </div>

      {/* Feedback Button */}
      <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
        <button
          onClick={() => navigate("/student/feedback")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go to Feedback Form
        </button>
      </div>
    </div>
  );
}
