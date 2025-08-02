
import { Code, Layout, Cloud, Laptop } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-theme-purple" />,
      title: "UI/UX Design",
      description: "Creating intuitive, engaging, and responsive user interfaces with a focus on user experience and accessibility."
    },
    {
      icon: <Code className="h-10 w-10 text-theme-purple" />,
      title: "Web Development",
      description: "Crafting end-to-end web solutions that integrate frontend and backend technologies to deliver secure, scalable, and high-performance applications."
    },
    {
      icon: <Cloud className="h-10 w-10 text-theme-purple" />,
      title: "Cloud Solutions",
      description: "Designing and implementing cloud-based architectures that ensure security, scalability, and reliability."
    },
    {
      icon: <Laptop className="h-10 w-10 text-theme-purple" />,
      title: "Responsive Web Design",
      description: "Creating websites that provide optimal viewing experience across a wide range of devices from desktop to mobile phones."
    }
  ];

  return (
    <section id="services" className="bg-theme-dark py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Services</h2>
          <p className="text-white/60 max-w-md mx-auto">Professional solutions I offer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect border-theme-purple/20 hover:border-theme-purple transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader className="pb-2">
                <div className="bg-theme-purple/10 rounded-full p-4 w-fit mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
