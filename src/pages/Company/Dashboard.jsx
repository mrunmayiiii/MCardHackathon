import React, { useState } from 'react';
import StudentListPage from './StudentListPage';
import { useNavigate } from "react-router-dom";
import FeedbackCompany from './FeedbackCompany';
 import StudentListPage from './StudentListPage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { Users, Calendar, TrendingUp, MessageSquare } from 'lucide-react';

const CompanyDashboard = () => {
  const navigate = useNavigate();
  // Sample student data - replace with your actual database data
  const [studentData] = useState([
    { id: 1, name: 'Rahul Sharma', position: 'Software Developer', startDate: '2024-01-15', endDate: '2024-04-15' },
    { id: 2, name: 'Priya Singh', position: 'Data Analyst', startDate: '2024-02-01', endDate: '2024-05-01' },
    { id: 3, name: 'Arjun Patel', position: 'UI/UX Designer', startDate: '2024-01-20', endDate: '2024-04-20' },
    { id: 4, name: 'Sneha Kumar', position: 'Software Developer', startDate: '2024-03-01', endDate: '2024-06-01' },
    { id: 5, name: 'Vikash Gupta', position: 'Marketing Intern', startDate: '2024-02-15', endDate: '2024-05-15' },
    { id: 6, name: 'Anjali Verma', position: 'Data Analyst', startDate: '2024-01-10', endDate: '2024-04-10' },
    { id: 7, name: 'Rohit Jain', position: 'Software Developer', startDate: '2024-03-15', endDate: '2024-06-15' },
    { id: 8, name: 'Kavya Reddy', position: 'HR Intern', startDate: '2024-02-20', endDate: '2024-05-20' },
    { id: 9, name: 'Amit Shah', position: 'UI/UX Designer', startDate: '2024-01-25', endDate: '2024-04-25' },
    { id: 10, name: 'Neha Agarwal', position: 'Marketing Intern', startDate: '2024-03-10', endDate: '2024-06-10' }
  ]);

  // Process data for charts
  const getPositionData = () => {
    const positionCounts = {};
    studentData.forEach(student => {
      positionCounts[student.position] = (positionCounts[student.position] || 0) + 1;
    });
    
    return Object.entries(positionCounts).map(([position, count]) => ({
      position: position.length > 15 ? position.substring(0, 15) + '...' : position,
      fullPosition: position,
      count
    }));
  };

  const getJoiningTrendData = () => {
    const monthCounts = {};
    studentData.forEach(student => {
      const date = new Date(student.startDate);
      const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      monthCounts[monthYear] = (monthCounts[monthYear] || 0) + 1;
    });
    
    return Object.entries(monthCounts).map(([month, count]) => ({
      month,
      students: count
    })).sort((a, b) => new Date(a.month) - new Date(b.month));
  };

  const getCurrentInterns = () => {
    const today = new Date();
    return studentData.filter(student => {
      const startDate = new Date(student.startDate);
      const endDate = new Date(student.endDate);
      return today >= startDate && today <= endDate;
    });
  };

  const positionData = getPositionData();
  const joiningTrendData = getJoiningTrendData();
  const currentInterns = getCurrentInterns();

  // Colors for charts
  const COLORS = ['#FF7A00', '#FF9500', '#FFB84D', '#FFC966', '#FFD580', '#FFE199'];

  const handleFeedbackClick = () => {
    // This would typically use React Router
    alert('Redirecting to feedback form... (In a real app, this would navigate to the Company Feedback Form)');
    navigate('/StudentListPage');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFEF7' }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">Company Dashboard</h1>
              <p className="text-black opacity-70">Student Internship Analytics & Feedback</p>
            </div>
            <button
              onClick={handleFeedbackClick}
              className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 shadow-md border border-black"
              style={{ backgroundColor: '#FF7A00' }}
            >
              <MessageSquare size={20} />
              Provide Student Feedback
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-black shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black opacity-60 text-sm font-medium">Total Students</p>
                <p className="text-3xl font-bold text-black">{studentData.length}</p>
              </div>
              <div className="p-3 rounded-full" style={{ backgroundColor: '#FF7A00' }}>
                <Users className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-black shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black opacity-60 text-sm font-medium">Current Interns</p>
                <p className="text-3xl font-bold text-black">{currentInterns.length}</p>
              </div>
              <div className="p-3 rounded-full" style={{ backgroundColor: '#FF9500' }}>
                <Calendar className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-black shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black opacity-60 text-sm font-medium">Unique Positions</p>
                <p className="text-3xl font-bold text-black">{positionData.length}</p>
              </div>
              <div className="p-3 rounded-full" style={{ backgroundColor: '#FF7A00' }}>
                <TrendingUp className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Position Distribution Chart */}
          <div className="bg-white p-6 rounded-lg border border-black shadow-md">
            <h3 className="text-xl font-semibold text-black mb-4">Students by Position</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={positionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="position" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [value, 'Students']}
                  labelFormatter={(label) => {
                    const item = positionData.find(d => d.position === label);
                    return item ? item.fullPosition : label;
                  }}
                />
                <Bar dataKey="count" fill="#FF7A00" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Position Distribution Pie Chart */}
          <div className="bg-white p-6 rounded-lg border border-black shadow-md">
            <h3 className="text-xl font-semibold text-black mb-4">Position Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={positionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ position, percent }) => `${position}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {positionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, 'Students']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Joining Trend Chart */}
        <div className="bg-white p-6 rounded-lg border border-black shadow-md mb-8">
          <h3 className="text-xl font-semibold text-black mb-4">Student Joining Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={joiningTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="students" 
                stroke="#FF7A00" 
                strokeWidth={3}
                dot={{ fill: '#FF7A00', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Current Interns Table */}
        <div className="bg-white rounded-lg border border-black shadow-md">
          <div className="p-6 border-b border-black">
            <h3 className="text-xl font-semibold text-black">Current Interns</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: '#FFFEF7' }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-b border-black">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-b border-black">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-b border-black">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-b border-black">End Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentInterns.map((intern, index) => (
                  <tr key={intern.id} className={index % 2 === 0 ? 'bg-white' : ''} style={index % 2 === 1 ? { backgroundColor: '#FFFEF7' } : {}}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{intern.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{intern.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{new Date(intern.startDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{new Date(intern.endDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {currentInterns.length === 0 && (
              <div className="p-6 text-center text-black opacity-60">
                No current interns found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;