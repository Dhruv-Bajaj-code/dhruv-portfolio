
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              offset={-64}
              className="p-3 bg-primary/10 rounded-full cursor-pointer hover:bg-primary/20 transition-colors"
            >
              <ArrowUp className="h-6 w-6 text-primary" />
            </Link>
          </div>
          
          <div className="text-xl font-heading font-bold mb-6">
            <span className="text-primary">Dhruv</span> Bajaj
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/dhruvbajaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/dhruvbajaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:dhruvbajaj789@gmail.com" 
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; {year} Dhruv Bajaj. All rights reserved.</p>
            <p className="mt-1">Full-Stack Developer | AWS Certified | MERN & Django Stack</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
