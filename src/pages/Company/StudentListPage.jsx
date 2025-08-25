import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, User, Calendar, Briefcase, Search, Filter } from 'lucide-react';

const StudentListPage = ({ onNavigateBack, onNavigateToFeedback }) => {
  // Sample student data - replace with your actual database data
  const [studentData] = useState([
    { id: 1, name: 'Rahul Sharma', position: 'Software Developer', startDate: '2024-01-15', endDate: '2024-04-15', status: 'Active' },
    { id: 2, name: 'Priya Singh', position: 'Data Analyst', startDate: '2024-02-01', endDate: '2024-05-01', status: 'Active' },
    { id: 3, name: 'Arjun Patel', position: 'UI/UX Designer', startDate: '2024-01-20', endDate: '2024-04-20', status: 'Completed' },
    { id: 4, name: 'Sneha Kumar', position: 'Software Developer', startDate: '2024-03-01', endDate: '2024-06-01', status: 'Active' },
    { id: 5, name: 'Vikash Gupta', position: 'Marketing Intern', startDate: '2024-02-15', endDate: '2024-05-15', status: 'Completed' },
    { id: 6, name: 'Anjali Verma', position: 'Data Analyst', startDate: '2024-01-10', endDate: '2024-04-10', status: 'Completed' },
    { id: 7, name: 'Rohit Jain', position: 'Software Developer', startDate: '2024-03-15', endDate: '2024-06-15', status: 'Active' },
    { id: 8, name: 'Kavya Reddy', position: 'HR Intern', startDate: '2024-02-20', endDate: '2024-05-20', status: 'Active' },
    { id: 9, name: 'Amit Shah', position: 'UI/UX Designer', startDate: '2024-01-25', endDate: '2024-04-25', status: 'Completed' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [positionFilter, setPositionFilter] = useState('All');

  // Get unique positions for filter
  const uniquePositions = [...new Set(studentData.map(student => student.position))];

  // Filter students based on search and filters
  const filteredStudents = studentData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || student.status === statusFilter;
    const matchesPosition = positionFilter === 'All' || student.position === positionFilter;
    
    return matchesSearch && matchesStatus && matchesPosition;
  });

  const handleSendFeedback = (student) => {
    // Store selected student data (you might want to use context or props)
    sessionStorage.setItem('selectedStudent', JSON.stringify(student));
    onNavigateToFeedback(student);
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold";
    if (status === 'Active') {
      return `${baseClasses} bg-green-100 text-green-800 border border-green-300`;
    } else {
      return `${baseClasses} bg-gray-100 text-gray-800 border border-gray-300`;
    }
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const days = diffDays % 30;
    
    if (months > 0) {
      return `${months}m ${days}d`;
    }
    return `${days} days`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFEF7' }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onNavigateBack}
                className="flex items-center gap-2 px-4 py-2 text-black hover:opacity-70 transition-all duration-200"
              >
                <ArrowLeft size={20} />
                Back to Dashboard
              </button>
              <div>
                <h1 className="text-4xl font-bold text-black mb-2">Student Feedback Center</h1>
                <p className="text-black opacity-70">Select a student to provide feedback</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg border border-black shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-black rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00]"
              />
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-black rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00]"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Position Filter */}
            <div>
              <select
                value={positionFilter}
                onChange={(e) => setPositionFilter(e.target.value)}
                className="w-full px-4 py-2 border border-black rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00]"
              >
                <option value="All">All Positions</option>
                {uniquePositions.map(position => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
            </div>

           
            
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white rounded-lg border border-black shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                {/* Student Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full" style={{ backgroundColor: '#FF7A00' }}>
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">{student.name}</h3>
                      <span className={getStatusBadge(student.status)}>{student.status}</span>
                    </div>
                  </div>
                </div>

                {/* Student Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Briefcase size={16} className="text-[#FF9500]" />
                    <span>{student.position}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Calendar size={16} className="text-[#FF9500]" />
                    <span>
                      {new Date(student.startDate).toLocaleDateString()} - {new Date(student.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="text-sm text-black opacity-70">
                    <strong>Duration:</strong> {calculateDuration(student.startDate, student.endDate)}
                  </div>
                </div>

                {/* Feedback Button */}
                <button
                  onClick={() => handleSendFeedback(student)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold rounded-lg hover:opacity-90 focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 transition-all duration-200 shadow-md border border-black"
                  style={{ backgroundColor: '#FF7A00' }}
                >
                  <MessageSquare size={18} />
                  Send Feedback
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStudents.length === 0 && (
          <div className="bg-white rounded-lg border border-black shadow-md p-12 text-center">
            <div className="p-4 rounded-full mx-auto mb-4 w-fit" style={{ backgroundColor: '#FFFEF7' }}>
              <User size={48} className="text-[#FF7A00]" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">No Students Found</h3>
            <p className="text-black opacity-70">
              {searchTerm || statusFilter !== 'All' || positionFilter !== 'All'
                ? 'Try adjusting your search or filter criteria.'
                : 'No students available at the moment.'}
            </p>
          </div>
        )}

      
      </div>
    </div>
  );
};

export default StudentListPage;