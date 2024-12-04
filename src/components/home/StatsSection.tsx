import React from 'react';
import { Users, Award, Building2, Briefcase } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      label: 'Students',
      value: '2000+',
      icon: <Users className="w-8 h-8" />,
    },
    {
      label: 'Faculty Members',
      value: '150+',
      icon: <Award className="w-8 h-8" />,
    },
    {
      label: 'Research Labs',
      value: '25+',
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      label: 'Placements',
      value: '90%',
      icon: <Briefcase className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;