// CompanyPage.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Table from "../components/Table";
import Feedback from "../components/Feedback";
import Chart from "../components/Chart";

export default function CompanyPage() {
  const companyName = "Tech Corp";

  const chartData = [
    { role: "Developer", count: 20 },
    { role: "Designer", count: 10 },
    { role: "Manager", count: 5 },
    { role: "HR", count: 3 },
  ];

  const tableData = [
    ["1", "Alice", "Developer", "2021", <Feedback company={companyName} />],
    ["2", "Bob", "Designer", "2020", <Feedback company={companyName} />],
    ["3", "Charlie", "Manager", "2019", <Feedback company={companyName} />],
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Navbar title={`Hello ${companyName}`} notifications={3} />
        <main className="p-6 space-y-6">
          <Card title="Employee Distribution by Role">
            <Chart data={chartData} xKey="role" yKey="count" />
          </Card>

          <Card title="Employees">
            <Table
              headers={["ID", "Name", "Role", "Joining Year", "Feedback"]}
              rows={tableData}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}