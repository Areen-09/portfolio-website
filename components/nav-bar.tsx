"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Code, Award, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

const iconMap = {
  Home: Home,
  About: User,
  Projects: Code,
  Skills: Briefcase,
  Achievements: Award,
  Contact: Mail,
};

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const { setTheme, theme } = useTheme();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    const handleScroll = () => {
      const sections = items.map((item) => {
        const element = document.querySelector(item.url);
        if (!element) return { name: item.name, position: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          name: item.name,
          position: Math.abs(rect.top),
        };
      });
      
      const current = sections.reduce((prev, curr) => 
        prev.position < curr.position ? prev : curr
      );
      
      setActiveTab(current.name);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <div
      className={cn(
        "fixed top-6 z-50 w-full px-0 sm:left-1/2 sm:-translate-x-1/2 sm:px-2 max-w-full sm:max-w-[90%] md:max-w-fit",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg w-full sm:w-auto">
        {items.map((item) => {
          const Icon = iconMap[item.name as keyof typeof iconMap];
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-3 sm:px-4 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-background/20 backdrop-blur-lg border border-border"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {theme === "light" ? (
              <Sun className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
          </motion.div>
        </Button>
      </div>
    </div>
  );
}