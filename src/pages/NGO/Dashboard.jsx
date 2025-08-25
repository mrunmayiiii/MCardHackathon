import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Users, Building, Calendar, MapPin, MessageSquare } from 'lucide-react';

const NGODashboard = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Sample data for students per company
  const studentData = [
    { company: 'TechCorp', students: 45, name: 'TechCorp' },
    { company: 'DataSystems', students: 32, name: 'DataSystems' },
    { company: 'CloudWorks', students: 28, name: 'CloudWorks' },
    { company: 'InnovateLab', students: 38, name: 'InnovateLab' },
    { company: 'FutureTech', students: 22, name: 'FutureTech' },
    { company: 'DigitalFlow', students: 35, name: 'DigitalFlow' }
  ];

  // Colors for pie chart
  const COLORS = ['#FF7A00', '#FF9500', '#FFB84D', '#FFC266', '#FFCC80', '#FFD699'];

  // Sample company data
  const companies = [
    { id: 1, name: 'TechCorp', totalStudents: 45 },
    { id: 2, name: 'DataSystems', totalStudents: 32 },
    { id: 3, name: 'CloudWorks', totalStudents: 28 },
    { id: 4, name: 'InnovateLab', totalStudents: 38 },
    { id: 5, name: 'FutureTech', totalStudents: 22 },
    { id: 6, name: 'DigitalFlow', totalStudents: 35 }
  ];

  // Sample student details for each company
  const studentDetails = {
    1: [ // TechCorp
      { id: 'ST001', name: 'Rahul Sharma', dateJoined: '2024-01-15', location: 'Mumbai' },
      { id: 'ST002', name: 'Priya Patel', dateJoined: '2024-01-20', location: 'Pune' },
      { id: 'ST003', name: 'Arjun Singh', dateJoined: '2024-02-01', location: 'Delhi' },
      { id: 'ST004', name: 'Sneha Gupta', dateJoined: '2024-02-10', location: 'Bangalore' }
    ],
    2: [ // DataSystems
      { id: 'ST005', name: 'Vikram Kumar', dateJoined: '2024-01-25', location: 'Chennai' },
      { id: 'ST006', name: 'Anita Rao', dateJoined: '2024-02-05', location: 'Hyderabad' },
      { id: 'ST007', name: 'Rohit Jain', dateJoined: '2024-02-15', location: 'Kolkata' }
    ],
    3: [ // CloudWorks
      { id: 'ST008', name: 'Meera Nair', dateJoined: '2024-01-30', location: 'Kochi' },
      { id: 'ST009', name: 'Aditya Verma', dateJoined: '2024-02-08', location: 'Jaipur' },
      { id: 'ST010', name: 'Kavya Reddy', dateJoined: '2024-02-12', location: 'Pune' }
    ],
    4: [ // InnovateLab
      { id: 'ST011', name: 'Sanjay Mehta', dateJoined: '2024-01-18', location: 'Ahmedabad' },
      { id: 'ST012', name: 'Ritu Singh', dateJoined: '2024-02-03', location: 'Lucknow' },
      { id: 'ST013', name: 'Karan Agarwal', dateJoined: '2024-02-18', location: 'Indore' }
    ],
    5: [ // FutureTech
      { id: 'ST014', name: 'Deepika Joshi', dateJoined: '2024-02-01', location: 'Surat' },
      { id: 'ST015', name: 'Nikhil Pandey', dateJoined: '2024-02-14', location: 'Nagpur' }
    ],
    6: [ // DigitalFlow
      { id: 'ST016', name: 'Pooja Tiwari', dateJoined: '2024-01-22', location: 'Bhopal' },
      { id: 'ST017', name: 'Amit Saxena', dateJoined: '2024-02-06', location: 'Kanpur' },
      { id: 'ST018', name: 'Shruti Malhotra', dateJoined: '2024-02-16', location: 'Chandigarh' }
    ]
  };

  const handleFeedback = (studentId, studentName) => {
    alert(`Feedback request sent for ${studentName} (ID: ${studentId})`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFEF7' }}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="p-6 border-b" style={{ borderColor: '#000000' }}>
            <h1 className="text-2xl font-bold" style={{ color: '#000000' }}>NGO Dashboard</h1>
          </div>
          
          <nav className="mt-6">
            <button
              onClick={() => {
                setActiveTab('students');
                setSelectedCompany(null);
              }}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                activeTab === 'students' 
                  ? 'border-r-4' 
                  : 'hover:bg-gray-50'
              }`}
              style={{
                borderColor: activeTab === 'students' ? '#FF7A00' : 'transparent',
                backgroundColor: activeTab === 'students' ? '#FFF5F0' : 'transparent',
                color: activeTab === 'students' ? '#FF7A00' : '#000000'
              }}
            >
              <Users className="mr-3 h-5 w-5" />
              Students
            </button>
            
            <button
              onClick={() => {
                setActiveTab('companies');
                setSelectedCompany(null);
              }}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                activeTab === 'companies' 
                  ? 'border-r-4' 
                  : 'hover:bg-gray-50'
              }`}
              style={{
                borderColor: activeTab === 'companies' ? '#FF7A00' : 'transparent',
                backgroundColor: activeTab === 'companies' ? '#FFF5F0' : 'transparent',
                color: activeTab === 'companies' ? '#FF7A00' : '#000000'
              }}
            >
              <Building className="mr-3 h-5 w-5" />
              Companies
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'students' && (
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>
                Students Distribution
              </h2>
              
              {/* Pie Chart Only */}
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg p-8" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: '#000000' }}>
                    Number of Students per Company
                  </h3>
                  <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={studentData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ students }) => students}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="students"
                          nameKey="company"
                        >
                          {studentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#FFFFFF', 
                            border: '1px solid #000000',
                            borderRadius: '8px'
                          }}
                          formatter={(value) => [`${value} students`, 'Students']}
                          labelFormatter={(label) => `Company: ${label}`}
                        />
                        <Legend 
                          verticalAlign="bottom" 
                          height={50}
                          wrapperStyle={{ color: '#000000', fontSize: '14px' }}
                          formatter={(value, entry) => (
                            <span style={{ color: entry.color }}>{value}</span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'companies' && !selectedCompany && (
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>
                Companies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <div
                    key={company.id}
                    onClick={() => setSelectedCompany(company)}
                    className="rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
                    style={{ backgroundColor: '#FFFFFF' }}
                  >
                    <div className="flex items-center mb-4">
                      <Building 
                        className="h-8 w-8 mr-3" 
                        style={{ color: '#FF7A00' }}
                      />
                      <h3 className="text-xl font-semibold" style={{ color: '#000000' }}>
                        {company.name}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      <Users 
                        className="h-5 w-5 mr-2" 
                        style={{ color: '#FF9500' }}
                      />
                      <span style={{ color: '#000000' }}>
                        {company.totalStudents} Students
                      </span>
                    </div>
                    <div className="mt-4">
                      <button
                        className="w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 hover:opacity-90"
                        style={{ 
                          backgroundColor: '#FF7A00', 
                          color: '#FFFFFF' 
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'companies' && selectedCompany && (
            <div>
              <div className="flex items-center mb-6">
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="mr-4 py-2 px-4 rounded-lg font-medium transition-colors duration-200 hover:opacity-90"
                  style={{ 
                    backgroundColor: '#FF9500', 
                    color: '#FFFFFF' 
                  }}
                >
                  ← Back
                </button>
                <h2 className="text-3xl font-bold" style={{ color: '#000000' }}>
                  {selectedCompany.name} - Student Details
                </h2>
              </div>

              <div className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead style={{ backgroundColor: '#FF7A00' }}>
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: '#FFFFFF' }}>
                          Student ID
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: '#FFFFFF' }}>
                          Student Name
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: '#FFFFFF' }}>
                          Date of Join
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: '#FFFFFF' }}>
                          Location
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: '#FFFFFF' }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(studentDetails[selectedCompany.id] || []).map((student, index) => (
                        <tr 
                          key={student.id}
                          className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                          style={{ borderColor: '#E5E5E5' }}
                        >
                          <td className="px-6 py-4 text-sm" style={{ color: '#000000' }}>
                            {student.id}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium" style={{ color: '#000000' }}>
                            {student.name}
                          </td>
                          <td className="px-6 py-4 text-sm" style={{ color: '#000000' }}>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" style={{ color: '#FF9500' }} />
                              {student.dateJoined}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm" style={{ color: '#000000' }}>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" style={{ color: '#FF9500' }} />
                              {student.location}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleFeedback(student.id, student.name)}
                              className="flex items-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-90"
                              style={{ 
                                backgroundColor: '#FF7A00', 
                                color: '#FFFFFF' 
                              }}
                            >
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Ask Feedback
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;