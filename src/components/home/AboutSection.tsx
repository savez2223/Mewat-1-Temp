import about from '../../assets/about.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Our College
            </h2>
            <p className="text-gray-600 mb-6">
              Mewat Engineering College is committed to academic excellence and preparing students
              for successful careers in engineering and technology. Our state-of-the-art facilities,
              experienced faculty, and industry partnerships provide students with the perfect
              environment for learning and growth.
            </p>
            <a
              href="/about"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Learn More →
            </a>
          </div>
          <div className="relative h-[400px]">
            <img
              src={about}
              alt="College Campus"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;