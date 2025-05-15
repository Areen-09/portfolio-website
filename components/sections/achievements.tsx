"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Medal } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "Finalist – DevJams by Google Developers Club",
      year: "2024",
      description: "Selected as a finalist among over 200 teams for an innovative web application solution.",
      icon: <Trophy className="w-12 h-12 text-chart-1" />,
    },
    {
      title: "1st Place – AI-ML Hackathon at Gravitas Tech Fest",
      year: "2023",
      description: "Won first place for developing a novel AI solution that addressed real-world accessibility challenges.",
      icon: <Medal className="w-12 h-12 text-chart-2" />,
    },
    {
      title: "Dean's List Scholar",
      year: "2022-2023",
      description: "Recognized for academic excellence with consistent high performance across all semesters.",
      icon: <Award className="w-12 h-12 text-chart-3" />,
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
    <section id="achievements" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="Achievements" 
          subtitle="Recognitions and awards" 
          icon={<Award className="w-6 h-6" />}
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col border-border/50 hover:shadow-md transition-shadow overflow-hidden">
                <CardContent className="flex flex-col items-center text-center p-6 h-full">
                  <div className="mb-4">
                    {achievement.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <span className="text-sm text-primary font-medium mb-4">{achievement.year}</span>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}