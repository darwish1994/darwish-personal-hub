
import { Award, UserCheck, Code, Star } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Highly skilled and motivated Android Developer with over 6 years of experience in 
              designing, developing, and maintaining high-quality Android applications. 
              Proficient in Kotlin and Java with a deep understanding of Android frameworks 
              and libraries.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Experienced in collaborating with cross-functional teams to deliver seamless 
              user experiences. Passionate about integrating AI and machine learning models 
              to enhance application functionality. Adept at implementing CI/CD pipelines and 
              ensuring application performance, security, and scalability.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/eng-ahmed-darwish/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-600 font-medium"
              >
                LinkedIn Profile
              </a>
              <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <a 
                href="https://github.com/eng-ahmed-darwish" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-600 font-medium"
              >
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Award className="text-primary mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Experience</h4>
              <p className="text-gray-600 dark:text-gray-400">Over 6 years of professional experience in Android development.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <UserCheck className="text-primary mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Leadership</h4>
              <p className="text-gray-600 dark:text-gray-400">Led code reviews and mentored junior developers.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Code className="text-primary mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Technologies</h4>
              <p className="text-gray-600 dark:text-gray-400">Proficient in Kotlin, Java, and modern Android frameworks.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Star className="text-primary mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Achievements</h4>
              <p className="text-gray-600 dark:text-gray-400">Improved app performance by 20% across devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
