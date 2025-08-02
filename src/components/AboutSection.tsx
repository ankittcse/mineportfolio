import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-theme-dark py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-white/60 max-w-md mx-auto">Get to know my background and expertise</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <Card className="glass-effect p-6 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-theme-purple/20 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-theme-purple" />
                </div>
                <h3 className="text-2xl font-semibold text-theme-purple">Education</h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                {/* B.Tech */}
                <div className="border-l-2 border-theme-purple pl-4 relative">
                  <div className="absolute w-3 h-3 bg-theme-purple rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science Engineering</h4>
                  <p className="text-white/80">Cloud Computing</p>
                  <p className="text-white/60 text-sm">Lovely Professional University</p>
                </div>

                {/* 10+2 CBSE */}
                <div className="border-l-2 border-theme-purple pl-4 relative">
                  <div className="absolute w-3 h-3 bg-theme-purple rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="font-semibold text-lg">Senior Secondary (10+2)</h4>
                  <p className="text-white/80">Science Stream (CBSE Board)</p>
                  <p className="text-white/60 text-sm">Completed with focus on Physics, Chemistry, Mathematics, and Computer Science</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <Card className="glass-effect p-6 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-theme-purple/20 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-theme-purple" />
                </div>
                <h3 className="text-2xl font-semibold text-theme-purple">Professional Overview</h3>
              </div>
              
              <div className="space-y-4 flex-grow">
                <p className="text-white/80">
                  An accomplished Frontend Developer and aspiring Cloud Engineer with a passion for building seamless and scalable user experiences.
                </p>
                <p className="text-white/80">
                  With a strong foundation in HTML, CSS, JavaScript, C++, Java, and Python, I specialize in crafting visually compelling, user-centric websites that are both responsive and functionally robust.
                </p>
                <p className="text-white/80">
                  My expertise in UI/UX principles ensures every project is designed with precision, usability, and performance in mind. Currently expanding my skill set into cloud computing to design and deploy secure, high-availability applications in cloud environments.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
