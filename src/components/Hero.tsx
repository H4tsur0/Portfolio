import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface HeroProps {
  currentlyReading: {
    title: string;
    author: string;
  };
}

const Hero: React.FC<HeroProps> = ({ currentlyReading }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero-text">
          <motion.p variants={item} className="hero-label mono">
            cybersecurity · philosophy
          </motion.p>
          
          <motion.h1 variants={item} className="hero-name">
            Richard Axel Gunawan
          </motion.h1>
          
          <motion.p variants={item} className="hero-tagline">
            I secure systems and question foundations.<br/>
            <em>Sometimes the same systems.</em>
          </motion.p>

          <motion.div variants={item} className="hero-cta">
            <a href="/projects" className="btn-primary">View projects</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
