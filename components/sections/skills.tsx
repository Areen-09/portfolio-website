"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase, Code2, Database, Server, PenTool, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Python", "JavaScript", "Java", "TypeScript", "SQL"],
    },
    {
      name: "Frameworks & Libraries",
      icon: <Server className="w-5 h-5" />,
      skills: ["FastAPI", "Next.js", "Django", "TensorFlow", "PyTorch", "LangChain"],
    },
    {
      name: "Databases & Cloud",
      icon: <Database className="w-5 h-5" />,
      skills: ["AWS DynamoDB", "MySQL", "MongoDB", "GCP"],
    },
    {
      name: "Dev Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "Docker"],
    },
  ];

  const certifications = [
    {
      name: "Generative AI with LangChain and HuggingFace",
      year: "2025",
      description: "Advanced techniques for building generative AI applications",
    },
    {
      name: "Full Stack Web Dev by 100xDevs",
      year: "2024",
      description: "Comprehensive full-stack web development bootcamp",
    },
    {
      name: "Meta Back-End Developer",
      year: "2023",
      description: "Professional certification in back-end web development",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="Skills" 
          subtitle="My technical expertise" 
          icon={<Briefcase className="w-6 h-6" />}
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-3 py-1 hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <PenTool className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group hover:bg-muted/50 p-4 rounded-lg transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}