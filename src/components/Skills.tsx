
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'TypeScript', proficiency: 80 },
        { name: 'SQL', proficiency: 85 },
        { name: 'Go', proficiency: 70 }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'FastAPI', proficiency: 90 },
        { name: 'Django', proficiency: 85 },
        { name: 'Express.js', proficiency: 80 },
        { name: 'REST APIs', proficiency: 90 },
        { name: 'WebSockets', proficiency: 75 }
      ]
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React.js', proficiency: 85 },
        { name: 'Angular.js', proficiency: 70 },
        { name: 'HTML/CSS', proficiency: 85 },
        { name: 'Tailwind CSS', proficiency: 80 }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 80 },
        { name: 'MongoDB', proficiency: 85 },
        { name: 'Redis', proficiency: 75 },
        { name: 'SQLite', proficiency: 80 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', proficiency: 90 },
        { name: 'Docker', proficiency: 80 },
        { name: 'Git', proficiency: 90 },
        { name: 'Linux', proficiency: 85 }
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Raspberry Pi', proficiency: 80 },
        { name: 'Postman', proficiency: 85 },
        { name: 'IoT', proficiency: 75 },
        { name: 'Data Structures', proficiency: 85 },
        { name: 'Algorithms', proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
