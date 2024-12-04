import React from 'react';
import { Building2, Trophy, Users, TrendingUp } from 'lucide-react';

const PlacementsPage = () => {
  const stats = [
    {
      label: 'Placement Rate',
      value: '92%',
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      label: 'Average Package',
      value: '₹8.5 LPA',
      icon: <Trophy className="w-8 h-8 text-blue-600" />
    },
    {
      label: 'Highest Package',
      value: '₹42 LPA',
      icon: <Building2 className="w-8 h-8 text-blue-600" />
    },
    {
      label: 'Companies Visited',
      value: '100+',
      icon: <Users className="w-8 h-8 text-blue-600" />
    }
  ];

  const topRecruiters = [
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Goldman_Sachs.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/Infosys_logo.svg'
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Placements</h1>
          <p className="text-xl text-blue-200">Building Careers, Creating Leaders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {topRecruiters.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow">
                <img src={logo} alt="Company Logo" className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Placement Process</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">1. Pre-Placement Talks</h3>
                <p className="text-gray-600">Companies visit campus to present their organization and job profiles.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">2. Written Test/Online Assessment</h3>
                <p className="text-gray-600">Technical and aptitude assessment of candidates.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">3. Technical Interviews</h3>
                <p className="text-gray-600">In-depth evaluation of technical knowledge and skills.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">4. HR Interviews</h3>
                <p className="text-gray-600">Final round to assess personality and cultural fit.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Training & Preparation</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Soft Skills Training</h4>
                    <p className="text-gray-600">Communication, presentation, and interpersonal skills development.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Technical Training</h4>
                    <p className="text-gray-600">Industry-relevant technical skills and programming languages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Mock Interviews</h4>
                    <p className="text-gray-600">Practice sessions with industry experts and alumni.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Industry Projects</h4>
                    <p className="text-gray-600">Hands-on experience through real-world projects.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementsPage;