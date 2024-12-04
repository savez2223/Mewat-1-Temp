import React from 'react';
import { BookOpen, Users, Beaker, Cpu, Code, Radio, Lightbulb, Building } from 'lucide-react';

const DepartmentsPage = () => {
  const departments = [
    {
      title: 'Computer Science Engineering',
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      description: 'Cutting-edge curriculum covering programming, artificial intelligence, machine learning, and software engineering.',
      facilities: ['AI Lab', 'Software Development Center', 'Research Lab'],
      hod: 'Dr. Amit Kumar'
    },
    {
      title: 'Mechanical Engineering',
      icon: <Users className="w-12 h-12 text-blue-600" />,
      description: 'Advanced manufacturing, robotics, CAD/CAM, and sustainable engineering solutions.',
      facilities: ['Robotics Lab', 'CAD Lab', 'Workshop'],
      hod: 'Dr. Rajesh Singh'
    },
    {
      title: 'Electronics Engineering',
      icon: <Radio className="w-12 h-12 text-blue-600" />,
      description: 'Circuit design, embedded systems, VLSI, and digital electronics.',
      facilities: ['Electronics Lab', 'Embedded Systems Lab', 'PCB Lab'],
      hod: 'Dr. Priya Sharma'
    },
    {
      title: 'Electrical Engineering',
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      description: 'Power systems, control systems, and electrical machines.',
      facilities: ['Power Systems Lab', 'Machines Lab', 'Control Systems Lab'],
      hod: 'Dr. Suresh Verma'
    },
    {
      title: 'Civil Engineering',
      icon: <Building className="w-12 h-12 text-blue-600" />,
      description: 'Structural engineering, construction technology, and environmental engineering.',
      facilities: ['Structural Lab', 'Environmental Lab', 'Surveying Lab'],
      hod: 'Dr. Neha Patel'
    },
    {
      title: 'Chemical Engineering',
      icon: <Beaker className="w-12 h-12 text-blue-600" />,
      description: 'Process design, materials science, and industrial chemistry.',
      facilities: ['Unit Operations Lab', 'Process Control Lab', 'Chemistry Lab'],
      hod: 'Dr. Rahul Gupta'
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl text-blue-200">Excellence in Engineering Education</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div key={dept.title} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {dept.icon}
                <h2 className="text-2xl font-bold ml-4">{dept.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{dept.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Key Facilities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {dept.facilities.map((facility) => (
                    <li key={facility}>{facility}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center text-blue-600">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Head of Department: {dept.hod}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;