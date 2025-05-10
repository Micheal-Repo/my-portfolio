import {
  motion
} from "framer-motion";
import AnimatedBlob from "./AnimatedBlob";
import {
  ArrowDown
} from "lucide-react";
import GridBg from "@/components/gridBg"
//import RippleBg from "@/components/rippleBg"
import Button from "@/components/Button"
import {
  User2,
  ExternalLink
} from 'lucide-react';


export default function Hero() {
  return (
    <section id="home" className="min-h-screen w-full relative overflow-hidden flex items-center pt-16">

      <GridBg />

      {/* Background gradient */}
      <div className="z-10 absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.03]" />

      <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="flex flex-col gap-6"
          initial={ { opacity: 0, y: 20 }}
          animate={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          >
          <motion.div
            initial={ { opacity: 0 }}
            animate={ { opacity: 1 }}
            transition={ { delay: 0.2, duration: 0.8 }}
            >
            <span className="text-lg text-muted-foreground">Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={ { opacity: 0, y: 20 }}
            animate={ { opacity: 1, y: 0 }}
            transition={ { delay: 0.4, duration: 0.8 }}
            >
            <span className="text-gradient">Aloysius</span>
            <span className="block mt-2">Full Stack Web Developer</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-lg"
            initial={ { opacity: 0, y: 20 }}
            animate={ { opacity: 1, y: 0 }}
            transition={ { delay: 0.6, duration: 0.8 }}
            >
            I build exceptional digital experiences that combine stunning design with cutting-edge technology.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-4"
            initial={ { opacity: 0, y: 20 }}
            animate={ { opacity: 1, y: 0 }}
            transition={ { delay: 0.8, duration: 0.8 }}
            >
            <Button
              href="#contact"
              Icon={User2}
              >
              Contact me
            </Button>
            <Button
              Icon={ExternalLink}
              href="#projects"
              outline={true}
              >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96"
            initial={ { opacity: 0, scale: 0.5 }}
            animate={ { opacity: 1, scale: 1 }}
            transition={ {
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            >

            <AnimatedBlob
              imageUrl="/aloy.jpg"
              className="absolute inset-0"
              size="lg"
              />

          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={ { opacity: 0, y: -20 }}
        animate={ { opacity: 1, y: 0 }}
        transition={ {
          delay: 1.5,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}