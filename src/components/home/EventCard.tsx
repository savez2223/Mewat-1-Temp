import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  type: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, type }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
          {type}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;