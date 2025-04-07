
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Cloud } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with React.js, Angular, and modern JavaScript.',
      icon: <Code className="h-8 w-8 text-primary" />
    },
    {
      title: 'Backend Development',
      description: 'Developing robust server-side applications with FastAPI, Django, and Node.js with RESTful APIs.',
      icon: <Server className="h-8 w-8 text-primary" />
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on AWS with expertise in S3, Lambda, DynamoDB, and Docker.',
      icon: <Cloud className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-center mb-6">
            I'm a Full-Stack Developer based in Bengaluru, Karnataka, with expertise in MERN and Django stacks.
            As a recent graduate from Vellore Institute of Technology, I specialize in building scalable web applications
            and IoT solutions with a focus on security and performance.
          </p>
          <p className="text-lg text-center">
            My background combines academic excellence with practical experience in software development,
            from AI-driven analytics to real-time IoT systems. I'm passionate about cloud technologies
            and hold multiple AWS certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
