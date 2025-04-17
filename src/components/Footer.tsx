
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Ahmed Darwish</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Senior Android Developer with over 6 years of experience in designing and developing high-quality Android applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/eng-ahmed-darwish/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/eng-ahmed-darwish" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:ahmed.darwish.dev@gmail.com" 
                className="bg-white dark:bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+201112321940" 
                className="bg-white dark:bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Ahmed Darwish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
