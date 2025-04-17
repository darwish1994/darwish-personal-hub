
export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Kotlin", "Java", "C++", "PHP", "Node.js"]
    },
    {
      title: "Android Development",
      skills: ["Compose", "XML", "KMM", "MVP", "MVVM", "MVI"]
    },
    {
      title: "Server Communication",
      skills: ["REST API", "Socket IO", "gRPC", "RabbitMQ"]
    },
    {
      title: "Dependency Injection",
      skills: ["Dagger2", "Hilt", "Koin"]
    },
    {
      title: "Development Tools",
      skills: ["Git", "CI/CD", "Jenkins", "Github Actions"]
    },
    {
      title: "Local Storage",
      skills: ["Room Database", "Realm Database", "Shared Preferences", "DataStore"]
    }
  ];

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills &amp; Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Relevant Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Reactive Programming</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">RxJava & Kotlin Coroutines</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Design Patterns</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">SOLID Principles</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Unit Testing</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Test Automation</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Bluetooth Integration</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Device Communication</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Clean Code</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Best Practices</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Gradle</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Flavors, Build, Distribution</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Play Console</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">App publishing & management</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg text-center">
              <div className="font-medium">Communication</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Team collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
