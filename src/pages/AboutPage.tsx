import { BookOpen, Target, Award } from 'lucide-react';
import zakir from '../assets/zakir_photo.jpg';
import shayin from "../assets/shayin_photo.png";
import director from "../assets/director_photo.png";
import about from "../assets/about.jpg";


const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-200">
            Discover our journey of excellence in education
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, Mewat Engineering College has been at the
              forefront of technical education, fostering innovation and
              excellence. Our commitment to quality education and practical
              learning has helped shape thousands of successful careers.
            </p>
            <p className="text-gray-600">
              We pride ourselves on our state-of-the-art facilities, experienced
              faculty, and strong industry connections that provide our students
              with the best possible learning environment.
            </p>
          </div>
          <div>
            <img
              src={about}
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
              To provide quality technical education and foster innovation
              through practical learning and research.
            </p>
          </div>
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a globally recognized institution known for excellence
              in technical education and research.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Excellence, Innovation, Integrity, and Social Responsibility guide
              everything we do.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src= {zakir}  
                alt="EX-MLA"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">
                Ch. Zakir Hussain, Ex-MLA
              </h3>
              <p className="text-gray-600">Administrator, Haryana Waqf Board</p>
            </div>
            <div className="text-center">
              <img
                src=  {shayin}
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">
                Shri Mohammad Shayin, IAS
              </h3>
              <p className="text-gray-600">CEO, Haryana Waqf Board</p>
            </div>
            <div className="text-center">
              <img
                src= {director}
                alt="Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">
                Prof. (Dr.) Khwaja M. Rafi
              </h3>
              <p className="text-gray-600">Director , MEC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;