import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  icon?: ReactNode;
}

export function SectionHeading({ title, subtitle, className, icon }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-16", className)}
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">{subtitle}</p>
      )}
      <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
}