
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-primary" size={40} />
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 text-sm rounded-full mb-3">
                  2012 - 2016
                </div>
                <h3 className="text-2xl font-bold mb-2">Bachelor's Degree</h3>
                <h4 className="text-xl text-gray-700 dark:text-gray-300 mb-4">Faculty of Computer Science and Information</h4>
                <div className="mb-4">
                  <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full mr-2">Major: Computer Science</span>
                  <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full">Minor: Information System</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Completed a comprehensive Computer Science degree program, gaining strong foundations in programming,
                  algorithms, data structures, and software engineering principles.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="text-primary" size={40} />
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 text-sm rounded-full mb-3">
                  2016 - 2017
                </div>
                <h3 className="text-2xl font-bold mb-2">Google & Udacity Program</h3>
                <h4 className="text-xl text-gray-700 dark:text-gray-300 mb-4">Mobile Application Launchpad</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Participated in the Mobile Application Launchpad program, an intensive training program supported by Google and Udacity.
                  Focused on Android application development, modern mobile architecture, and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
