
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect (SAA-C03)',
      issuer: 'Amazon Web Services (AWS)',
      issued: 'Aug 2024',
      skills: ['Amazon Web Services (AWS)', 'Cloud Architecture', 'Infrastructure Design'],
      image: '/lovable-uploads/e9f8a90f-3192-4404-a62c-1a4f40ff41f6.png'
    },
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      issuer: 'Amazon Web Services (AWS)',
      issued: 'Jun 2024',
      skills: ['Amazon Web Services (AWS)', 'Cloud Computing', 'Cloud Services'],
      image: '/lovable-uploads/e9f8a90f-3192-4404-a62c-1a4f40ff41f6.png'
    },
    {
      title: 'Ultimate AWS Certified Solutions Architect Associate SAA-C03',
      issuer: 'Udemy',
      issued: 'Feb 2024',
      skills: ['Amazon Web Services (AWS)', 'Cloud Computing', 'Solutions Architecture'],
      image: '/lovable-uploads/33e4f458-3444-4908-a30c-763e1896b604.png'
    },
    {
      title: 'Web Development Bootcamp (MERN Stack)',
      issuer: 'Udemy',
      issued: 'Jan 2023',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Full Stack Development'],
      image: '/lovable-uploads/33e4f458-3444-4908-a30c-763e1896b604.png'
    }
  ];

  const achievements = [
    {
      title: 'Finalist, Code4Change Hackathon 2024',
      description: 'Led a team to build a Udemy-like learning platform with integrated chatbot support.'
    },
    {
      title: 'Semi-Finalist, IGNITIA Hackathon 2023',
      description: 'Developed an OLX-style marketplace for college students, enabling secure transactions.'
    },
    {
      title: 'Leetcode 100 Days Badge',
      description: 'Completed 100 consecutive days of solving coding problems on Leetcode.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/4 bg-muted/20 p-6 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.issuer}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <div className="sm:w-3/4 p-6">
                    <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                    <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      Issued {cert.issued}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
