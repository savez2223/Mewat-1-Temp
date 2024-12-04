import React from 'react';
import EventCard from './EventCard';

const EventsSection = () => {
  const events = [
    {
      title: 'Annual Tech Symposium',
      date: 'March 15, 2024',
      description: 'Join us for a day of technical presentations, workshops, and networking.',
      type: 'Technical',
    },
    {
      title: 'Campus Recruitment Drive',
      date: 'April 2, 2024',
      description: 'Major tech companies visiting for placement opportunities.',
      type: 'Placement',
    },
    {
      title: 'Cultural Fest',
      date: 'April 20, 2024',
      description: 'Celebrate diversity through music, dance, and art performances.',
      type: 'Cultural',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <a
            href="/events"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            View All Events →
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;