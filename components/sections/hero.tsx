"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section 
      id="home" 
      className="h-screen flex flex-col items-center justify-center relative px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background to-background"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-transparent"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-full border-2 border-primary/20 p-1 backdrop-blur-sm">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64"
              >
                <img 
                  src="/images/new_profile_1.png" 
                  alt="Areen Agrawal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left max-w-2xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="text-primary">Areen Agrawal</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
            >
              Final year B.Tech ECE Student at VIT, Vellore
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mb-8"
            >
              Passionate about Full-stack development, AI/ML, and Generative AI. Building innovative solutions to real-world problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button size="lg" asChild>
                <a href="https://drive.google.com/file/d/123FOW3RNHdkGGNm2vrIuPlBhT-ZBXUDF/view" target="_blank" download>
                  <FileText className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center md:justify-start gap-4 mt-8"
            >
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://github.com/Areen-09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full border border-border"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://www.linkedin.com/in/areen-agrawal-523307250/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full border border-border"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        className="absolute bottom-8"
      >
        <Button variant="ghost" size="icon" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}