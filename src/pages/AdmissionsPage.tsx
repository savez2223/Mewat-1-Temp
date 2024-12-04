import { BookOpen, Calendar, FileText, CreditCard } from 'lucide-react';

const AdmissionsPage = () => {
  const admissionSteps = [
    {
      title: 'Online Application',
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      description: 'Fill out the online application form with your personal and academic details.'
    },
    {
      title: 'Document Submission',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description: 'Upload required documents including academic transcripts and identification.'
    },
    {
      title: 'Application Review',
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      description: 'Your application will be reviewed by our admissions committee.'
    },
    {
      title: 'Fee Payment',
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      description: 'Complete the admission process by paying the required fees.'
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-200">Begin your journey with us</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
            <div className="space-y-8">
              {admissionSteps.map((step, index) => (
                <div key={step.title} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  10th Standard Mark Sheet
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  12th Standard Mark Sheet
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  JEE Main Score Card
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Character Certificate
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Transfer Certificate
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Passport Size Photographs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Aadhar Card
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Application Start Date</h3>
              <p className="text-blue-600">March 1, 2024</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Application Deadline</h3>
              <p className="text-blue-600">April 30, 2024</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Academic Year Begins</h3>
              <p className="text-blue-600">August 1, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;