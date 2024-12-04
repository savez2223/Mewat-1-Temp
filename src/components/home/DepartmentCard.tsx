import React from 'react';
import { BookOpen, Users, Beaker, Cpu } from 'lucide-react';

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: 'mechanical' | 'computer' | 'chemical' | 'electronics';
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'mechanical':
        return <Users className="w-8 h-8 text-blue-600" />;
      case 'computer':
        return <Cpu className="w-8 h-8 text-blue-600" />;
      case 'chemical':
        return <Beaker className="w-8 h-8 text-blue-600" />;
      case 'electronics':
        return <BookOpen className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default DepartmentCard;