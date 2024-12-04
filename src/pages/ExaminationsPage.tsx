import React from 'react';
import { Calendar, FileText, Clock, AlertCircle } from 'lucide-react';

const ExaminationsPage = () => {
  const examSchedule = [
    {
      semester: 'Semester 1',
      exams: [
        { subject: 'Engineering Mathematics', date: 'April 10, 2024', time: '10:00 AM - 1:00 PM' },
        { subject: 'Physics', date: 'April 12, 2024', time: '10:00 AM - 1:00 PM' },
        { subject: 'Basic Electronics', date: 'April 14, 2024', time: '10:00 AM - 1:00 PM' }
      ]
    },
    {
      semester: 'Semester 3',
      exams: [
        { subject: 'Data Structures', date: 'April 11, 2024', time: '2:00 PM - 5:00 PM' },
        { subject: 'Digital Logic', date: 'April 13, 2024', time: '2:00 PM - 5:00 PM' },
        { subject: 'Computer Networks', date: 'April 15, 2024', time: '2:00 PM - 5:00 PM' }
      ]
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Examinations</h1>
          <p className="text-xl text-blue-200">Important information about examinations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Calendar className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exam Schedule</h3>
            <p className="text-gray-600">View the complete examination timetable for all semesters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FileText className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Results</h3>
            <p className="text-gray-600">Access your examination results and grade cards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <AlertCircle className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Important Notices</h3>
            <p className="text-gray-600">Stay updated with the latest examination announcements.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Upcoming Examinations</h2>
          {examSchedule.map((sem) => (
            <div key={sem.semester} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{sem.semester}</h3>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sem.exams.map((exam) => (
                      <tr key={exam.subject}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {exam.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {exam.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {exam.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Examination Guidelines</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-600">Arrive at least 30 minutes before the examination.</span>
              </li>
              <li className="flex items-start">
                <FileText className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-600">Carry your hall ticket and college ID card.</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-600">Electronic devices are not allowed in the examination hall.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Downloads</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Examination Rules and Regulations</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Seating Arrangement</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Previous Year Question Papers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExaminationsPage;