
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-theme-dark pt-20">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Social media links column - moved even more to the left */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-6 justify-center">
          <a 
            href="https://www.linkedin.com/in/ankit-raj-kishor/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-theme-purple hover:text-theme-light-purple transition-colors w-12 h-12 flex items-center justify-center bg-white/5 rounded-full"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noreferrer"
            className="text-theme-purple hover:text-theme-light-purple transition-colors w-12 h-12 flex items-center justify-center bg-white/5 rounded-full"
            aria-label="GitHub Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        
        {/* Profile image column - moved further to the left */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start ml-0">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-theme-purple/20 flex items-center justify-center p-1">
            <img 
              src="./../public/MyPicprofile.jpg"
              alt="Profile Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Text and CTA column - adjusted to balance the new layout */}
        <div className="lg:col-span-7 text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I am <span className="text-theme-purple">Ankit Kishor</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-6">
            Web Developer | Aspiring Cloud Engineer
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto lg:mx-0">
            Passionate about creating engaging web experiences.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-theme-purple text-white rounded-lg hover:bg-theme-purple/90 transition-colors"
          >
            Contact Me
            <span className="ml-2">📧</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/60 text-sm mb-2">Scroll down</span>
        <a href="#about" className="text-theme-purple" aria-label="Scroll to About section">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
