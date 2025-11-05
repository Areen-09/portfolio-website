"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Fine-Tuned LLM for gprMax",
      description: "Enhanced gprMax usability with LLM assistant. Open-source contribution for EM simulation.",
      tools: ["HuggingFace", "PyTorch", "Langchain"],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://huggingface.co/areen09/gprMax-ft_Mistral_v0.2",
    },
    {
      title: "Legal Document Demystifier",
      description: "AI-powered legal document demystifier that leverages Large Language Models to simplify complex legalcontracts into easy-to-understand language while preserving key details.",
      tools: ["Python", "TypeScript", "Google Cloud Platform", "next.js", "Vertex AI", "RAG"],
      image: "https://images.pexels.com/photos/613508/pexels-photo-613508.jpeg",
      github: "https://github.com/Areen-09/legalmind-ai",
      demo: "https://legalmind-ai-mu.vercel.app/",
    },
    {
      title: "Autonomous Parking System",
      description: "Reinforcement learning agent for real-world parking simulation.",
      tools: ["Unity", "Python", "C#"],
      image: "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://github.com/Areen-09/Automatic_Parking_System_Using_ReinforcementLearning_with_Simulation_in_Unity",
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="Projects" 
          subtitle="Some of my recent work" 
          icon={<Code className="w-6 h-6" />}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}