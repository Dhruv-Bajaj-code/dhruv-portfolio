
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'BIGTALK Technologies and Servies Pvt Ltd',
      type: 'Internship',
      period: 'Aug 2023 - Nov 2023 (4 months)',
      location: 'Bengaluru, Karnataka, India',
      description: [
        'Developed and deployed scalable FastAPI/Django-based backends for AI-driven analytics and IoT applications.',
        'Designed RESTful APIs and integrated secure authentication mechanisms using JWT and OAuth 2.0.',
        'Collaborated with cross-functional teams to enhance system reliability, real-time data processing, and cloud storage solutions.'
      ],
      skills: ['FastAPI', 'Amazon Web Services (AWS)', 'Python', 'REST APIs', 'Django']
    },
    {
      title: 'Member',
      company: 'ADGVIT',
      type: 'University Group',
      period: 'Feb 2023 - Present (2 yrs 3 mos)',
      location: 'Vellore, Tamil Nadu, India',
      description: [
        'Contributed to various technical projects utilizing FastAPI, Django, and front-end technologies.',
        'Participated in team development and technical community activities.',
        'Helped organize and mentor technical workshops for fellow students.'
      ],
      skills: ['FastAPI', 'Front-End Development', 'Django', 'Team Collaboration']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/4 p-6 bg-muted/20 flex justify-center md:justify-start items-start">
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      {exp.company === 'ADGVIT' ? (
                        <img 
                          src="/lovable-uploads/f02d954d-741e-4ce3-9285-a87e34da4a11.png" 
                          alt="ADGVIT Logo" 
                          className="w-16 h-16 object-contain"
                        />
                      ) : (
                        <img 
                          src="/lovable-uploads/9f09e174-1b76-4278-900f-b360a1f51c83.png" 
                          alt="BIGTALK Logo" 
                          className="w-16 h-16 object-contain"
                        />
                      )}
                    </div>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                      <Badge variant="outline" className="mt-1">{exp.type}</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
