import React from 'react';
import { Trophy } from 'lucide-react';

const AchieversSection = () => {
  const achievers = [
    {
      name: 'Priya Sharma',
      achievement: 'Gold Medalist - Computer Science',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Rahul Verma',
      achievement: 'Microsoft Research Fellow',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Aisha Khan',
      achievement: 'National Innovation Award Winner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Achievers</h2>
          <p className="text-gray-600">Celebrating excellence and outstanding achievements</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {achievers.map((achiever) => (
            <div key={achiever.name} className="text-center">
              <div className="relative mb-4 inline-block">
                <img
                  src={achiever.image}
                  alt={achiever.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{achiever.name}</h3>
              <p className="text-gray-600">{achiever.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchieversSection;