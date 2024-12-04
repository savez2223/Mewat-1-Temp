import React from 'react';
import DepartmentCard from './DepartmentCard';

const DepartmentsSection = () => {
  const departments = [
    {
      title: 'Computer Science',
      description: 'Cutting-edge curriculum covering programming, AI, and software engineering.',
      icon: 'computer' as const,
    },
    {
      title: 'Mechanical Engineering',
      description: 'Advanced manufacturing, robotics, and sustainable engineering solutions.',
      icon: 'mechanical' as const,
    },
    {
      title: 'Chemical Engineering',
      description: 'Process design, materials science, and industrial chemistry.',
      icon: 'chemical' as const,
    },
    {
      title: 'Electronics Engineering',
      description: 'Circuit design, embedded systems, and digital electronics.',
      icon: 'electronics' as const,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept) => (
            <DepartmentCard key={dept.title} {...dept} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;