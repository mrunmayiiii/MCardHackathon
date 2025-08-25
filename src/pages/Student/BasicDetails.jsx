import React from "react";

export default function BasicDetails() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Basic Details</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}
