
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    { name: "HTML & CSS", rating: 4.5, level: 90 },
    { name: "C Programming", rating: 4, level: 90 },
    { name: "JavaScript", rating: 4, level: 80 },
    { name: "C++", rating: 4, level: 90 },
    { name: "Python", rating: 4, level: 90 },
    { name: "DBMS", rating: 4, level: 90 },
    { name: "Java", rating: 4, level: 90 },
    { name: "UI/UX Design", rating: 4, level: 80 },
    { name: "Responsive Design", rating: 5, level: 100 },
    { name: "Cloud Fundamentals (AWS, Azure)", rating: 4, level: 90 },
    { name: "Git & GitHub", rating: 4, level: 80 },
    { name: "Communication & Teamwork", rating: 4, level: 80 },
  ];

  return (
    <section id="skills" className="bg-theme-dark/50 py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <p className="text-white/60 max-w-md mx-auto">My technical expertise and proficiency levels in various technologies</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-effect p-4 rounded-lg animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{skill.name}</span>
                <div className="flex min-w-max">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < skill.rating ? 'text-theme-purple' : 'text-white/20'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <Progress value={skill.level} className="h-2 bg-theme-purple/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
