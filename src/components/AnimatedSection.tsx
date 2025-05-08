import {
  ReactNode
} from "react";
import {
  motion
} from "framer-motion";
import {
  useInView
} from "react-intersection-observer";

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export const AnimatedSection = ({
  id,
  className = "",
  children,
  delay = 0
}: AnimatedSectionProps) => {
  const [ref,
    inView] = useInView( {
      triggerOnce: true,
      threshold: 0.1,
    });

  const variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${className}`}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible": "hidden"}
      >
      {children}
    </motion.section>
  );
};