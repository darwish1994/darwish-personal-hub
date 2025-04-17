
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-2 animate-fade-up">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up" style={{animationDelay: "100ms"}}>
              Ahmed Darwish
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-up" style={{animationDelay: "200ms"}}>
              Senior Android Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-lg animate-fade-up" style={{animationDelay: "300ms"}}>
              With over 6 years of experience building high-quality Android applications
              that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{animationDelay: "400ms"}}>
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#experience">View Experience</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-blue-400 dark:from-primary-800 dark:to-blue-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    alt="Ahmed Darwish" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 shadow-lg rounded-full p-4">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold">
                  6+ yrs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll Down">
            <ArrowDown className="text-primary" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
