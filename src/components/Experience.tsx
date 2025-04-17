
import { BadgeCheck, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Awfar Market",
      position: "Senior Android Developer",
      period: "Feb 2019 - Present",
      description: [
        "Designed, developed, and maintained high-quality Android applications using Kotlin and Java.",
        "Collaborated with product managers, designers, and backend engineers to define and implement new features.",
        "Integrated AI and machine learning models to enhance user functionality and engagement.",
        "Led code reviews and mentored junior developers to uphold high coding standards and best practices.",
        "Implemented CI/CD pipelines for efficient development and release processes.",
        "Ensured application security by implementing robust measures to safeguard user data.",
        "Optimized app performance, resulting in a 20% improvement in load times across various devices."
      ]
    },
    {
      company: "Digital Yard",
      position: "Senior Android Developer",
      period: "Feb 2021 - Nov 2021",
      description: [
        "Developed native Android applications and frameworks using Kotlin and Java.",
        "Defined and implemented robust app architectures and complex user interfaces.",
        "Collaborated with designers, engineers, and product managers to build great experiences.",
        "Developed cisco communication plugins using java."
      ]
    },
    {
      company: "Logapps",
      position: "Android Developer",
      period: "Jan 2018 - March 2019",
      description: [
        "Developed feature-rich Android applications with seamless user experiences.",
        "Integrated RESTful APIs for data synchronization with backend services.",
        "Troubleshot and resolved complex technical issues and bugs, improving application stability.",
        "Implemented personalized recommendations and intelligent notifications to boost user engagement.",
        "Collaborated with the QA team to develop and execute comprehensive testing strategies.",
        "Stayed up-to-date with the latest Android development trends and technologies."
      ]
    },
    {
      company: "Freelancer",
      position: "Android Developer",
      period: "July 2016 - Dec 2017",
      description: [
        "Worked as freelancer on Upwork for solving app bugs and developing apps for customers."
      ]
    },
    {
      company: "Mobile Application Launchpad",
      position: "Android Internship",
      period: "July 2016 - September 2017",
      description: [
        "Joined mobile application Launchpad supported by Google and Udacity."
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-primary"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-16 md:mb-24 relative ${index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0' : 'md:mr-auto md:pr-8 md:pl-0'} md:w-1/2 pl-16`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-auto ${index % 2 === 0 ? 'md:-left-3' : 'md:-right-3'} top-5 w-6 h-6 rounded-full border-4 border-primary bg-white dark:bg-gray-900 z-10`}></div>
              
              {/* Date bubble */}
              <div className="absolute left-10 md:left-auto top-4 md:top-auto md:mt-1 bg-primary text-white text-xs py-1 px-3 rounded-full flex items-center">
                <Calendar size={12} className="mr-1" />
                <span>{exp.period}</span>
              </div>
              
              {/* Content */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg mt-8 md:mt-0">
                <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                <h4 className="text-primary font-semibold mb-4">{exp.company}</h4>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <BadgeCheck className="text-primary mt-1 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
