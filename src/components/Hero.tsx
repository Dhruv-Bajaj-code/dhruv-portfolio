
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Dhruv Bajaj</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-muted-foreground">
              Full-Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              MERN & Django Stack || AWS SAA-C03 Certified || Linux Enthusiast
              <br/>
              Building scalable, secure web applications and IoT solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="contact" smooth={true} duration={500} offset={-64}>
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              <img 
                src="/lovable-uploads/34598490-be15-4fae-a9fb-65ce2bbb5e14.png" 
                alt="Dhruv Bajaj" 
                className="absolute inset-4 rounded-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Link to="about" smooth={true} duration={500} offset={-64} className="cursor-pointer">
            <ArrowDown className="h-6 w-6 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
