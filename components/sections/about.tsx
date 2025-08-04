"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { User, School, Calendar } from "lucide-react";

export function About() {
  const educationData = [
    {
      degree: "B.Tech, Electronics & Communication Engineering",
      institution: "VIT, Vellore",
      period: "2022–present",
      grade: "CGPA: 8.72",
    },
    {
      degree: "CBSE 12th",
      institution: "Career Point World School",
      period: "2021",
      grade: "85.5%",
    },
    {
      degree: "CBSE 10th",
      institution: "St. Joseph's Mission School",
      period: "2019",
      grade: "86.66%",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know my background and education" 
          icon={<User className="w-6 h-6" />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a final year B.Tech student in Electronics & Communication Engineering at VIT, Vellore, with a passion for building innovative technology solutions. My interests span across full-stack development, artificial intelligence, machine learning, and generative AI.
            </p>
            <p className="text-muted-foreground mb-4">
              I enjoy tackling complex problems and creating applications that make a difference. My journey in technology has equipped me with a diverse skill set and a growth mindset that drives me to continuously learn and adapt.
            </p>
            <p className="text-muted-foreground">
              Currently, I'm focusing on expanding my knowledge in AI/ML while honing my full-stack development skills. I'm always open to collaborating on exciting projects and exploring new opportunities in the tech space.
            </p>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <School className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-3 w-px h-[calc(100%-24px)] bg-border/50"></div>
              
              {educationData.map((edu, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="mb-4 overflow-hidden hover:shadow-md transition-all duration-300 group">
                    <CardContent className="relative p-6">
                      <div className="absolute left-[-24px] top-8 w-12 h-px bg-border/50"></div>
                      <div className="absolute left-[-30px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:scale-125 transition-transform"></div>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <div className="mt-2 inline-flex px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {edu.grade}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}