import React from 'react';
import { BookOpen, Target, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-200">Discover our journey of excellence in education</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, Mewat Engineering College has been at the forefront of technical education,
              fostering innovation and excellence. Our commitment to quality education and practical
              learning has helped shape thousands of successful careers.
            </p>
            <p className="text-gray-600">
              We pride ourselves on our state-of-the-art facilities, experienced faculty, and strong
              industry connections that provide our students with the best possible learning environment.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="College Campus"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide quality technical education and foster innovation through practical learning
              and research.
            </p>
          </div>
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a globally recognized institution known for excellence in technical education
              and research.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Excellence, Innovation, Integrity, and Social Responsibility guide everything we do.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Principal"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dr. Rajesh Kumar</h3>
              <p className="text-gray-600">Principal</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dr. Amit Patel</h3>
              <p className="text-gray-600">Director</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Dean"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dr. Priya Singh</h3>
              <p className="text-gray-600">Dean of Academics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;