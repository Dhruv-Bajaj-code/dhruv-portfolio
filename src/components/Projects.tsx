
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Regulo Backend System',
      description: 'Backend for an AI-powered company website',
      details: [
        'Developed a scalable FastAPI-based backend for Regulo\'s website to process user-uploaded facial images in real-time.',
        'Integrated pre-built AI models in collaboration with the AI team to analyze facial images for signs of tiredness and distraction.',
        'Architected the backend into modular components for user authentication, image analysis, and data storage.',
        'Leveraged AWS S3 for cloud storage and MongoDB for flexible and efficient data management.'
      ],
      tags: ['FastAPI', 'AWS S3', 'MongoDB', 'AI Integration', 'Back-End Web Development'],
      links: {
        github: 'https://github.com/dhruvbajaj/regulo-backend',
        live: '#'
      }
    },
    {
      title: 'OAuth 2.0 Authentication & Resource Server',
      description: 'Developed a secure OAuth 2.0 system using FastAPI',
      details: [
        'Designed and built a custom OAuth 2.0 authentication system from scratch with JWT-based access control.',
        'Developed a complete authentication flow, including user registration, login, authorization code generation, and secure token exchange.',
        'Separated the solution into an Authorization Server and a Resource Server to ensure robust security, scalability, and maintainability.'
      ],
      tags: ['FastAPI', 'OAuth 2.0', 'JWT', 'Security', 'API Development'],
      links: {
        github: 'https://github.com/dhruvbajaj/oauth2-server',
        live: '#'
      }
    },
    {
      title: 'IoT-Based Vehicle Monitoring',
      description: 'In-house system for real-time vehicle and driver monitoring',
      details: [
        'Engineered an IoT-powered vehicle tracking system using Raspberry Pi and GPS to monitor vehicle parameters and driver behavior.',
        'Integrated a dual-camera setup and leveraged pre-existing AI models for real-time detection of driver drowsiness and mobile phone usage.',
        'Developed a low-latency communication system using WebSockets for live data streaming.',
        'Utilized AWS services for scalable cloud storage, processing, and analysis of vehicle data.'
      ],
      tags: ['IoT', 'Raspberry Pi', 'GPS', 'AWS', 'WebSockets', 'Real-time Monitoring'],
      links: {
        github: 'https://github.com/dhruvbajaj/iot-vehicle-monitoring',
        live: '#'
      },
      images: ['/lovable-uploads/68cfd9bb-e081-490b-86ab-e205db322de0.png', '/lovable-uploads/74cc8d10-3615-43f0-bb13-74be665351c4.png']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Recent Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col card-hover h-full overflow-hidden">
              {project.images && (
                <div className="relative h-48 overflow-hidden flex items-center bg-secondary/50">
                  <div className="grid grid-cols-2 w-full gap-2 p-4">
                    {project.images.map((img, i) => (
                      <img 
                        key={i}
                        src={img} 
                        alt={`${project.title} screenshot ${i+1}`}
                        className="rounded-md h-40 w-full object-cover"
                      />
                    ))}
                  </div>
                </div>
              )}
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="font-medium text-muted-foreground mb-4">{project.description}</p>
                
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{detail}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline">+{project.tags.length - 3} more</Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 py-4 border-t flex justify-between">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
