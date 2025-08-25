import React from "react";

export default function Feedback() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Student Feedback Form</h2>
      <form className="flex flex-col gap-4">
        <label>
          Work Culture Satisfaction (1–5):
          <input type="number" min="1" max="5" className="border p-2 rounded w-full" />
        </label>
        <label>
          Salary vs Expectation (1–5):
          <input type="number" min="1" max="5" className="border p-2 rounded w-full" />
        </label>
        <label>
          Suggestions for NGO:
          <textarea className="border p-2 rounded w-full" />
        </label>
        <label>
          Suggestions for Company:
          <textarea className="border p-2 rounded w-full" />
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
