
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-dark py-8 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © {currentYear} Ankit Kishor. All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-white/60 mb-4 md:mb-0 md:mr-6">
              Made with <Heart className="inline-block h-4 w-4 text-theme-purple" /> using React & Tailwind CSS
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/ankit-raj-kishor/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/60 hover:text-theme-purple transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 hover:text-theme-purple transition-colors"
              >
                GitHub
              </a>
              <a 
                href="#contact" 
                className="text-white/60 hover:text-theme-purple transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
