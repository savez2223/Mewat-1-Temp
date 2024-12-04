import { Calendar, MapPin, Clock } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      title: 'Annual Technical Symposium',
      date: 'March 15-16, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      category: 'Technical',
      description: 'Two-day technical festival featuring workshops, competitions, and guest lectures from industry experts.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Cultural Fest 2024',
      date: 'April 20-22, 2024',
      time: '10:00 AM - 8:00 PM',
      location: 'College Campus',
      category: 'Cultural',
      description: 'Three-day extravaganza of music, dance, art, and theatrical performances.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Industry Connect Workshop',
      date: 'May 5, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Seminar Hall',
      category: 'Workshop',
      description: 'Interactive session with industry leaders on emerging technologies and career opportunities.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl text-blue-200">Stay updated with our latest events and activities</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Past Events Gallery</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Past Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Past Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Past Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Past Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden"></div>          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsPage;