import { Heart } from "lucide-react"; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  
  return (
    <footer className="bg-theme-dark py-8 border-t border-white/10">
      <div className="section-container">
        {/* I've changed justify-between to justify-center here */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © {currentYear} Ankit Kishor. All rights reserved.
          </p>
          
          {/* I have removed the entire block that contained the 
            "Made with..." text and the LinkedIn, GitHub, and Contact links.
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;