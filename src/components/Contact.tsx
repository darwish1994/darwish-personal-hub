
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out for job opportunities, collaborations, or just to say hello.
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:ahmed.darwish.dev@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    ahmed.darwish.dev@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+201112321940" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    +201112321940
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Maadi, Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/eng-ahmed-darwish/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] text-white p-2 rounded-md hover:opacity-90 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href="https://github.com/eng-ahmed-darwish" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white p-2 rounded-md hover:opacity-90 transition-opacity"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
