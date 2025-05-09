import {
  motion
} from "framer-motion";
import AnimatedBlob from "./AnimatedBlob";
import {
  Code,
  FileCode,
  Server,
  User
} from "lucide-react";

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function SkillItem({
  icon, title, description, delay
}: SkillItemProps) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 bg-accent rounded-lg"
      initial={ { opacity: 0, y: 20 }}
      whileInView={ { opacity: 1, y: 0 }}
      transition={ { delay, duration: 0.5 }}
      viewport={ { once: true, margin: "-50px" }}
      >
      <div className="mt-1 p-2 bg-primary/10 text-primary rounded-md">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const skills = [{
    icon: <Code className="h-5 w-5" />,
    title: "Frontend Development",
    description: "Building responsive UIs with React, Next.js, and modern CSS frameworks.",
  },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Backend Development",
      description: "Creating APIs with Node.js, Express, and database management.",
    },
    {
      icon: <FileCode className="h-5 w-5" />,
      title: "Full Stack Integration",
      description: "Connecting frontend and backend with RESTful APIs and GraphQL.",
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "UX/UI Design",
      description: "Designing user-centered interfaces with a focus on accessibility.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden w-full">
      <div className="absolute -left-40 top-40 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-30" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I'm a passionate developer with expertise in creating modern web applications.
            With a focus on clean code and intuitive user experiences, I bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="flex justify-center"
            initial={ { opacity: 0, scale: 0.8 }}
            whileInView={ { opacity: 1, scale: 1 }}
            transition={ { duration: 0.8 }}
            viewport={ { once: true }}
            >
            <div className="relative">
              <AnimatedBlob
                imageUrl="/aloy.jpg"
                size="md"
                className="lg:scale-x-[-1]"
                />
              <div className="absolute -bottom-4 -right-4 glass rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={ { opacity: 0, y: 20 }}
              whileInView={ { opacity: 1, y: 0 }}
              transition={ { duration: 0.8 }}
              viewport={ { once: true }}
              >
              <h3 className="text-2xl font-medium mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience in web development, I've worked on projects ranging from small business websites to complex enterprise applications. My approach combines technical expertise with creative problem-solving.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "MongoDB", "PostgreSQL"].map((tech, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent rounded-full text-xs font-medium"
                    >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillItem
                  key={skill.title}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  delay={index * 0.1}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}